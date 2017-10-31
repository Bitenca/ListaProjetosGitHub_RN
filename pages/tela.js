import React, {Component} from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class tela extends Component{
    state = {
        texto: "",
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
            <Text>Digite o usuário do GitHub</Text>
            <TextInput style={styles.input}
             placeholder= "Digita ai"
             placeholderTextColor = 'blue'
             autoCorrect = {false}
             value= {this.state.texto}
             onChangeText={texto => this.setState({texto})}/>
            <Button
              onPress={() => navigate('Details', this.state.texto)}
              title="Ir para repositórios"
            />
          </View>
        );
    }
    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    telas:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    input:{
        height: 40,
        width: 300,
    }
  });

export default tela;