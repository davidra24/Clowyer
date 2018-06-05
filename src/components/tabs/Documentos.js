/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import styleSheet from '../../styles/Styles';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';
import {obtenerDocumentos} from '../../webService/apis'
import ListDocument from '../CRUD/ListDocument'

const styles = styleSheet;
type Props = {};

export default class Documentos extends Component<Props>{
  constructor(props){
    super(props)
    this.state = {
      documentos : [],
      isModalVisible : false
    }
  }
  static navigationOptions = {
    tabBarLabel: 'Documentos'
  }
  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

  openCameraRoll(){
    Actions.cameraRoll();
  }

  componentWillMount(){
    obtenerDocumentos()
      .then((data) => this.setState({
        documentos: data
      }))
  }

  render() {
    return (
      <View style = {styles.container}>
        <View >
          <ListDocument documentos={this.state.documentos}/>
        </View>
        <TouchableHighlight style={styles.addButton} onPress={this.openCameraRoll}>
          <Text style={{fontSize: 50, color: 'white'}}>+</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
