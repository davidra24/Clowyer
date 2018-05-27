/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Splash from './components/screens/Splash';
import LogIn from './components/screens/LogIn';
import UserScreen from './components/screens/UserScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import Home from './components/screens/Home';
import AgregarCaso from './components/CRUD/AgregarCaso';
import AgregarCliente from './components/CRUD/AgregarCliente';
import CameraRoll from './components/screens/CameraRoll';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';
import {Scene, Router, Stack} from 'react-native-router-flux';

type Props = {};
export default class App extends Component<Props>{
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="splash" component={Splash} hideNavBar/>
          <Scene key="logIn" component={LogIn} hideNavBar/>
          <Scene key="registerScreen" component={RegisterScreen} hideNavBar/>
          <Scene key="home" component={Home} hideNavBar/>
          <Scene key="registerScreen" component={RegisterScreen} rightTitle={'Guardar  '}/>
          <Scene key="agregarCaso" component={AgregarCaso} onRight={()=>{}} rightTitle={'Guardar  '}/>
          <Scene key="agregarCliente" component={AgregarCliente} onRight={()=>{}} rightTitle={'Guardar  '}/>
          <Scene key="cameraRoll" component={CameraRoll} onRight={()=>{}} rightTitle={'Guardar  '}/>
        </Stack>
      </Router>
    )
  }
}
