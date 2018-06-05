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
import ItemDocument from './ItemDocument'
import {setCases} from '../../validate/global'
import {getCases} from '../../validate/global'
import {getItemCache} from '../../webService/storage'

const styles = styleSheet;
type Props = {};
export default class ListClient extends Component{
  constructor(props){
    super(props);
    this.state = {
      documentos: [],
      activeUser : getItemCache('activeUser'),
    }
  }
  componentWillMount() {
    const { content } = this.props;
    this.setState({documentos: content});
  }
  componentWillReceiveProps(newProps){
    this.setState({
      documentos :  this.props.documentos
    });
  }
  render() {
      return (
        <View>
          <FlatList data = {this.state.documentos}
            keyExtractor = {(x, i) => i}
            renderItem = {({ item }) =>{
                if(item.idLawyer == this.state.activeUser){
                  return (<ItemDocument nombreDocumento = {item.name} url = {item.url}/>)
                }
              }
            }
          />
        </View>
    );
  }
}
