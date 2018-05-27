/*<>*/
import React, { Component } from 'react';
import {
View,
Platform,
Text,
FlatList,
TouchableHighlight
} from 'react-native';
import styleSheet from '../../styles/Styles';
import ItemClient from './ItemClient'
import {setClients} from '../../validate/global'


const styles = styleSheet;
type Props = {};
export default class ListClient extends Component{
  constructor(props){
    super(props);
    this.state = {
      clientes: []
    }
  }
  componentWillMount() {
    const { content } = this.props;
    this.setState({clientes: content});
    setClients(this.props.clientes.identification);
  }
  componentWillReceiveProps(newProps){
    this.setState({
      clientes :  this.props.clientes
    });
    setClients(this.props.clientes.identification);
  }
  render() {
      return (
        <View>
          <FlatList data = {this.state.clientes}
            keyExtractor = {(x, i) => i}
            renderItem = {({ item }) =>
              <ItemClient style = {styles.itemConsult} tipoCliente = {item.type} nombreCliente = {item.name} telefonoCliente = {item.phone}/>
            }
          />
        </View>
    );
  }
}
