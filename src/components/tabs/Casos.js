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
  TouchableHighlight,
  Image
} from 'react-native';
import styleSheet from '../../styles/Styles';
import {obtenerCasos} from '../../webService/apis'
import { Actions } from 'react-native-router-flux';
import ListCasos from '../CRUD/ListCasos'

const styles = styleSheet;
type Props = {};
function addCaso(){
  Actions.agregarCaso();
}
export default class Casos extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      Case : []
    }
  }
  componentDidMount(){
    obtenerCasos()
      .then((data) => this.setState({
        Case: data
      }))
  }
  static navigationOptions = {
    tabBarLabel: 'Casos'
  }
  render() {
    return (
      <View style = {styles.container}>
        <View >
          <ListCasos casos={this.state.Case}/>
        </View>
        <TouchableHighlight style={styles.addButton}
          underlayColor='#ff7043' onPress={()=>{addCaso()}}>
          <Text style={{fontSize: 50, color: 'white'}}>+</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
