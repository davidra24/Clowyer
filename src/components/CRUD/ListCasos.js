/*<>*/
import React, { Component } from 'react';
import {
View,
Platform,
Text,
FlatList,
TouchableHighlight,ListItem
} from 'react-native';
import styleSheet from '../../styles/Styles';
import ItemCasos from './ItemCasos'
import {setCases} from '../../validate/global'

const styles = styleSheet;
type Props = {};
export default class ListClient extends Component{
  constructor(props){
    super(props);
    this.state = {
      casos: []
    }
  }
  componentWillMount() {
    const { content } = this.props;
    this.setState({casos: content});
    setCases(this.props.casos.number);
  }
  componentWillReceiveProps(newProps){
    this.setState({
      casos :  this.props.casos
    });
    setCases(this.props.casos.number);
  }
  render() {
      return (
        <View>
          <FlatList data = {this.state.casos}
            keyExtractor = {(x, i) => i}
            renderItem = {({ item }) =>
              <ItemCasos numeroCaso = {item.number} nombreCaso = {item.name} nombreCorte = {item.courtName}/>
            }
          />
        </View>
    );
  }
}
