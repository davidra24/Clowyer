import React, { Component } from 'react';
import {
  View,
  Platform,
  StyleSheet,
} from 'react-native';
import styleSheet from '../../styles/Styles';
import UserScreen from './UserScreen';

const styles = styleSheet;
type Props = {};
export default class Home extends Component<Props> {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <UserScreen />
    );
  }
}
