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

const styles = styleSheet;
type Props = {};

export default class CameraRoll extends Component<Props>{
  constructor(props){
    super(props)
    this.state = {
      isModalVisible : false
    }
  }
  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.capture}>CAPTURE</Text>
      </View>
    )
  }
}
