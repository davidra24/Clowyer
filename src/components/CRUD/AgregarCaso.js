/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ToastAndroid,
  Picker,
  TouchableHighlight,
  ImageBackground,
  Image
} from 'react-native';
import styleSheet from '../../styles/Styles';
import DatePicker from 'react-native-datepicker'
import {existCase} from '../../validate/global'
import {agregarCasos} from '../../webService/apis'
import { Actions } from 'react-native-router-flux';

const backgroundImg = require('../../assets/fondo.png');
const styles = styleSheet;
type Props = {};
const images = {
  background: require("../../assets/fondoCliente.png")
}
export default class AgregarCaso extends Component<Props>{
  constructor(props){
    super(props);
    this.state = {
      numberCase: '',
      nameCase:'',
      dateStart: '',
      dateFinish: '',
      courtName: ''
    }
    this.SaveCase = this.SaveCase.bind(this);
  }
  static onRight() { const c = Actions.refs.agregarCaso; c.SaveCase(); }
  SaveCase(){
    if(!existCase(this.state.numberCase)){
      const db = {
        number : this.state.numberCase,
        name : this.state.nameCase,
        dateStart : this.state.dateStart,
        dateFinish : this.state.dateFinish,
        courtName : this.state.courtName
      }
      agregarCasos(db);
      Actions.home();
      ToastAndroid.show('Datos gaurdados satisfactoriamente', ToastAndroid.SHORT)
    }else{
      ToastAndroid.show('El cliente que desea guardar ya existe', ToastAndroid.SHORT)
   }
  }
  componentDidMount() {

  }
  render() {
    return (
      <View style = {styles.container}>
        <ImageBackground source={images.background} style={styles.backgroundImage}>
          <View style = {styles.rectangle}>
            <Text style = {styles.bienvenido}>Numero de caso: </Text>
            <TextInput keyboardType={'phone-pad'} style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 15}} underlineColorAndroid='white' onChangeText={(numberCase) => {this.setState({numberCase : numberCase})}}/>
            <Text style = {styles.bienvenido}>Nombre de caso: </Text>
            <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 15}} underlineColorAndroid='white' onChangeText={(nameCase) => {this.setState({nameCase : nameCase})}}/>
            <Text style = {styles.bienvenido}>Fecha de inicio: </Text>
            <DatePicker
                    style={{width: '100%'}}
                    date={this.state.dateStart}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="1900-01-01"
                    maxDate="2999-12-31"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      color:'#FFFFFF',
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                    }}
                    onDateChange={(date) => {this.setState({dateStart: date})}}
                  />
                  <Text style = {styles.bienvenido}>Fecha de fin: </Text>
                  <DatePicker
                          style={{width: '100%'}}
                          date={this.state.dateFinish}
                          mode="date"
                          placeholder="select date"
                          format="YYYY-MM-DD"
                          minDate="1900-01-01"
                          maxDate="2999-12-31"
                          confirmBtnText="Confirm"
                          cancelBtnText="Cancel"
                          customStyles={{
                            color:'#FFFFFF',
                            dateIcon: {
                              position: 'absolute',
                              left: 0,
                              top: 4,
                              marginLeft: 0
                            },
                            dateInput: {
                              marginLeft: 36
                            }
                          }}
                          onDateChange={(date) => {this.setState({dateFinish: date})}}
                        />
            <Text style = {styles.bienvenido}>Nombre de la corte: </Text>
            <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 15}} underlineColorAndroid='white' onChangeText={(courtName) => {this.setState({courtName : courtName})}}/>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
