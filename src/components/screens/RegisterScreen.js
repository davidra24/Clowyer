//Pantalla de inicio cuando el usuario no ha loggueado en la aplicación
import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Platform,
  StyleSheet,
  ToastAndroid,
  CheckBox
} from 'react-native';
import {register} from '../../webService/apis'
import styleSheet from '../../styles/Styles';
import {Actions} from 'react-native-router-flux'

const styles = styleSheet;
const backgroundImg = require('../../assets/fondo.png');
function makeClick(){

}
type Props = {};
export default class RegisterScreen extends Component<Props> {
    constructor (){
      super();
      this.state = {
        cedula: '',
        nombres: '',
        telefono: '',
        password: '',
        repassword: '',
        email: '',
        especialidad: ''
      }
      this.saveChanges = this.saveChanges.bind(this);
    }
    saveChanges(){
      if(this.state.cedula==''||this.state.nombres==''||this.state.telefono==''||this.state.password==''||
          this.state.repassword==''||this.state.email==''||this.state.especialidad==''){
        ToastAndroid.show('Rellene todos los campos antes de continuar', ToastAndroid.SHORT)
      }else if(this.state.password==this.state.repassword){
        const db = {
          cedula : this.state.cedula,
          nombre : this.state.nombres,
          telefono : this.state.telefono,
          mail : this.state.email,
          password : this.state.password,
          especialidad : this.state.especialidad,
        }
        register(db)
        Actions.logIn();
        ToastAndroid.show('Usuario registrado satisfactoriamente', ToastAndroid.SHORT)
      }else{
        ToastAndroid.show('Contraseñas no conciden', ToastAndroid.SHORT)
      }
    }
    static onRight() { const c = Actions.refs.registerScreen; c.saveChanges(); }
    render() {
        return (
          <View style = {styles.container}>
            <ImageBackground source={backgroundImg} style={styles.backgroundImage}>
              <View style = {styles.rectangle}>
                <Text style = {styles.bienvenido}>Cédula: </Text>
                <TextInput keyboardType={'phone-pad'} style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 15}} underlineColorAndroid='white' onChangeText={(cedula) => {this.setState({cedula})}}/>
                <Text style = {styles.bienvenido}>Nombres y apellidos: </Text>
                <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 15}} underlineColorAndroid='white' onChangeText={(nombres) => {this.setState({nombres})}}/>
                <Text style = {styles.bienvenido}>Teléfono: </Text>
                <TextInput keyboardType={'phone-pad'} style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 15}} underlineColorAndroid='white' onChangeText={(telefono) => {this.setState({telefono})}}/>
                <Text style = {styles.bienvenido}>e-Mail: </Text>
                <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 15}} underlineColorAndroid='white' onChangeText={(email) => {this.setState({email})}}/>
                <Text style = {styles.bienvenido}>Contraseña: </Text>
                <TextInput secureTextEntry={true} style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white' onChangeText={(password) => {this.setState({password})}}/>
                <Text style = {styles.bienvenido}>Verifique su contraseña: </Text>
                <TextInput secureTextEntry={true} style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 20}} underlineColorAndroid='white' onChangeText={(repassword) => {this.setState({repassword})}}/>
                <Text style = {styles.bienvenido}>Especialidad: </Text>
                <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 15}} underlineColorAndroid='white' onChangeText={(especialidad) => {this.setState({especialidad})}}/>
              </View>
            </ImageBackground>
          </View>
        );
    }
}
