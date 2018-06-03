import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import styleSheet from '../../styles/Styles';
import {Actions} from 'react-native-router-flux'
import {getItemCache} from '../../webService/storage'

const styles = styleSheet;
type Props = {};
export default class SplashScreen extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      logged : this.props.logged
    }
  }
  timeOut(){
    setTimeout(function() {
      const activeUser = getItemCache('activeUser')
      if(activeUser==null){
        Actions.logIn();
      }else{
        Actions.home();
      }
    }, 2000);
  }
    render() {
        const img = this.props.img;
        return (
          <View style = {styles.container} backgroundColor='#edddd4'>
            <Image style = {styles.images} source = {img}/>
            <ActivityIndicator style = {styles.spinner} size="large" color="#772e25" />
            {this.timeOut()}
          </View>
        );
    }
}
