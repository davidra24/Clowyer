import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Platform,
  TextInput,
  StyleSheet,
  Button,
  ToastAndroid,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styleSheet from '../../styles/Styles';
import {logIn} from '../../webService/apis'
import Modal from 'react-native-modal';
import {setItemCache} from '../../webService/storage'
import {getItemCache} from '../../webService/storage'

type Props = {};
const styles = styleSheet;
const URLLawyerLogIn = 'http://clowyer.herokuapp.com/login-lawyer';
const images = {
  logo: require("../../assets/login.png"),
  backgroundLogIn: require("../../assets/fondo.png")
}
export default class LogIn extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      isModalVisible: false,
      abogado : {
        _id: 0
      },
      user: '',
      password: ''
    }
  }
  logIn(mail, pass) {
     fetch(URLLawyerLogIn, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Encoding': '*',
      },
      body: JSON.stringify({
          email : mail,
          password: pass
      }),
    })
    .then(response => response.json())
    .then((responseData) => {
      this.setState({
        abogado : responseData.Lawyer
      })
      setItemCache('activeUser', responseData.Lawyer._id)
    })
    .done()
  }
  goRegisterScreen() {
    Actions.registerScreen();
  }
  goUserScreen(){
    const user = this.state.user;
    const password = this.state.password;
    console.warn('usuario: ', user);
    console.warn('pass: ', password);
    this.logIn(user, password)
    this._toggleModal();
    this.timeoutHandle = setTimeout(()=>{
      if(this.state.abogado._id!=0){
        console.warn('id : ',this.state.abogado._id)
        Actions.home({
          userId : getItemCache('activeUser')
        });
      }else{
        ToastAndroid.show('Usuario o contraseña incorrectos', ToastAndroid.SHORT)
      }
      this.setState({ isModalVisible: false })
    }, 10000);
  }
  _toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });
  render(){
      return (
        <View style = {styles.container}>
          <ImageBackground source={images.backgroundLogIn} style={styles.backgroundImage}>
            <View style = {styles.rectangle}>
              <Image style = {styles.logo} source={images.logo}></Image>
                <Text style = {styles.bienvenido}>E-Mail: </Text>
                <TextInput style = {{width: '100%', height: 40, color: '#FFFFFF', fontSize: 15}} underlineColorAndroid='white' onChangeText={(user) => {this.setState({user : user})}}/>
                <Text style = {styles.bienvenido}>Contraseña: </Text>
                <TextInput secureTextEntry={true} style = {{width: '100%',height: 40, color: '#FFFFFF', fontSize: 15}} underlineColorAndroid='white' onChangeText={(password) => {this.setState({password : password})}}/>
                <View style = {styles.boton}>
                  <Button style = {styles.boton}
                    onPress={this.goUserScreen.bind(this)}
                    title="Iniciar sesión"
                    color="#c44536"
                  />
                </View>
                <View style = {styles.boton}>
                  <Button
                    onPress={this.goRegisterScreen}
                    title="Registrarse"
                    color="#c44536"
                  />
                </View>
              </View>
          </ImageBackground>
          <Modal isVisible={this.state.isModalVisible}>
            <View>
              <Text style={styles.waittext}>Iniciando sesión</Text>
              <ActivityIndicator style = {styles.spinner} size="large" color="#772e25" />
            </View>
          </Modal>
        </View>
      );
  }
}
