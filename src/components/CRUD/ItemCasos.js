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
export default class Clientes extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      isModalVisible : false
    }
  }
  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._toggleModal}>
          <View style={styles.containerList}>
            <Text style = {styles.tipoCliente}>{this.props.numeroCaso}</Text>
            <View style = {styles.infoContainer}>
              <Text style = {styles.nombreCliente}>{this.props.nombreCaso}</Text>
              <Text style = {styles.telefonoCliente}>{this.props.nombreCorte}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isModalVisible: false })}>
          <View>
            <Text >Caso #{this.props.numeroCaso}</Text>
            <Text >Clientes de ese caso</Text>
            <Text >Agregar Clientes Al Caso</Text>
          </View>
        </Modal>
      </View>
    )
  }
}
