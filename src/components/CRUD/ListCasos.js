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
import {getItemCache} from '../../webService/storage'

const styles = styleSheet;
type Props = {};
export default class ListClient extends Component{
  constructor(props){
    super(props);
    this.state = {
      casos: [],
      activeUser : getItemCache('activeUser')
    }
  }
  componentWillMount() {
    const { content } = this.props;
    this.setState({casos: content});
    setCases(this.props.casos);
  }
  componentWillReceiveProps(newProps){
    this.setState({
      casos :  this.props.casos
    });
    setCases(this.props.casos);
  }
  render() {
      return (
        <View>
          <FlatList data = {this.state.casos}
            keyExtractor = {(x, i) => i}
            renderItem = {({ item }) =>{
                if(item.idLawyer == this.state.activeUser){
                  return (<ItemCasos numeroCaso = {item.number} nombreCaso = {item.name} nombreCorte = {item.courtName}/>)
                }
              }
            }
          />
        </View>
    );
  }
}
