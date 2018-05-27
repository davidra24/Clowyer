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

const styles = styleSheet;
type Props = {};

export default class CameraRoll extends Component<Props>{
  constructor(props){
    super(props)
    this.state = {
      isModalVisible : false
    }
  }
  takePicture(){
    const options = {}
    this.camera.capture({metadata:options}).then((data) => {
      console.warn(data)
    }).catch((error) => {
      console.warn(error)
    })
  }
  render() {
    return (
      <View style = {styles.cameraContainer}>
        <Camera ref={(cam) => {
          this.camera = cam
        }} style={styles.view} aspect={Camera.constants.Aspect.fill}/>
        <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
          CAPTURE
        </Text>
      </View>
    )
  }
}
