import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import tela from './pages/tela';
import detail from './pages/detail';

const RootNavigator = StackNavigator({
  Home: {
    screen: tela,
    navigationOptions: {
      headerTitle: 'Tela Inicial',
    },
  },
  Details: {
    screen: detail,
    navigationOptions: {
      headerTitle: 'Informações do Usuário',
    },
  },
});

export default RootNavigator;