/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import styleSheet from '../../styles/Styles';
import {removeItemCache} from '../../webService/storage'
import {Actions} from 'react-native-router-flux'

const styles = styleSheet;
type Props = {};
export default class Ajustes extends Component<Props>{
  static navigationOptions = {
    tabBarLabel: 'Ajustes'
  }
  logout(){
    removeItemCache('activeUser');
    Actions.logIn();
  }
  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity onPress={this.logout}><Text>Cerrar Sesion</Text></TouchableOpacity>
      </View>
    )
  }
}
