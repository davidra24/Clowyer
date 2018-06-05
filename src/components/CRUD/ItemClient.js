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
import Modal from 'react-native-modal'

const styles = styleSheet;
type Props = {};

export default class Clientes extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      isModalVisible:false
    }
  }
  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <TouchableHighlight onPress={this._toggleModal}>
        <View style = {styles.containerList}>
          <View>
            <Text style = {styles.tipoCliente}>{this.props.tipoCliente}</Text>
          </View>
          <View style = {styles.container}>
            <Text style = {styles.nombreCliente}>{this.props.nombreCliente}</Text>
            <Text style = {styles.telefonoCliente}>{this.props.telefonoCliente}</Text>
          </View>
          <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isModalVisible: false })}>
            <View>
              <Text style={styles.waittext}>{this.props.nombreCliente}</Text>
              <Text style={styles.waittext}>{this.props.telefonoCliente}</Text>
            </View>
          </Modal>
        </View>
      </TouchableHighlight>
    )
  }
}
