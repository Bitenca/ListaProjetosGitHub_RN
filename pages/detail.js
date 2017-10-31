import React, {Component} from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    ListView,
    Linking,
    TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import http from '../lib/http';

class detail extends Component{   
    state= {
        loading: true,
        repos: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2}),
        username: ''
    }

    componentWillMount(){
        const username = this.props.navigation.state.params
        this.setState({ username })

        http.get('/users/'+ username + '/repos')
        .then(res => this.setState({
            loading: false,
            repos: this.state.repos.cloneWithRows(res.data)
        }))
        .catch(console.error) 
    };

    renderRow(repo){
        return(
            <TouchableOpacity onPress={() => Linking.openURL(repo.html_url).catch(console.error)}>
                <View style={styles.list}>
                    <Text>{repo.name}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    render(){
        if(this.state.loading){
            return(
                <View style={styles.telas}>
                <Text>Carregando repositórios de </Text><Text style={{fontWeight: 'bold'}}>{this.state.username}</Text>
            </View>
            );
    } else {
        return <ListView
        dataSource={this.state.repos}
        renderRow={repo => this.renderRow(repo)}/>
    }
    }  
};

const styles = StyleSheet.create({
    telas:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    list:{
        padding: 10,
        borderBottomWidth: 1
    }
  });

export default detail;