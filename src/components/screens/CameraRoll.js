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
import Modal from 'react-native-modal';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { zip, unzip, unzipAssets, subscribe } from 'react-native-zip-archive'
import {obtenerCasos} from '../../webService/apis'

const styles = styleSheet;
type Props = {};
var photosTaken = [];
var data = [];
function sendPicture(){
  console.warn('enviar foto');
}

export default class CameraRoll extends Component<Props>{
  constructor(props){
    super(props)
    this.state = {
      Caso : '',
      isModalVisible : false,
      photosCaptured : []
    }
    this.sendPictures = this.sendPictures.bind(this);
  }
  static onRight() { const c = Actions.refs.cameraRoll; c.sendPictures(); }
  sendPictures(){
    this.setState({
      photosCaptured : photosTaken
    })
    this.setState({
      isModalVisible: true
    })
  }
  takePicture(){
    const options = {}
    this.camera.capture({metadata:options}).then((data) => {
      console.warn(data)
      photosTaken.push(data)
    }).catch((error) => {
      console.warn(error)
    })
  }
  componentWillMount(){
    obtenerCasos()
      .then((data) => this.setState({
        Caso: data
      }))
  }
  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });
  render() {
    return (
      <View style = {styles.cameraContainer}>
        <Camera ref={(cam) => {
          this.camera = cam
        }} style={styles.view}
        aspect={Camera.constants.Aspect.fill}/>
        <Icon name="camera" size={30} color="#900" style={styles.capture} onPress={this.takePicture.bind(this)} />
      </View>
    )
  }
}
