import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image,
  WebView,
  Linking
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
  openUrl(){
    return (<WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(this.props.url);
          }
        }}
      />)
  }
  render() {
    return (
      <View>
        <TouchableHighlight onPress={this._toggleModal}>
          <View style={styles.containerList}>
            <Text style = {styles.tipoCliente}>{this.props.nombreDocumento}</Text>
          </View>
        </TouchableHighlight>
        <Modal isVisible={this.state.isModalVisible} onBackdropPress={() => this.setState({ isModalVisible: false })}>
          <View>
           {this.openURL}
            {/*<TouchableOpacity style={styles.waittext} onPress={this.openUrl}><Text style={{color:'white', textAlign: 'center',alignItems: 'center', fontSize: 30}}>Ver</Text></TouchableOpacity>*/}
          </View>
        </Modal>
      </View>
    )
  }
}
