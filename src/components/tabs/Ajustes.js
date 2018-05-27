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

const styles = styleSheet;
type Props = {};
export default class Ajustes extends Component<Props>{
  static navigationOptions = {
    tabBarLabel: 'Ajustes'
  }
  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity><Text>Configuración de cuenta</Text></TouchableOpacity>
        <TouchableOpacity><Text>Cerrar Sesion</Text></TouchableOpacity>
      </View>
    )
  }
}
