import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View} from 'react-native';  
import Splash from './Splsh';
import Login from './src/components/Login/Login'
import RegisterPage from './src/components/RegisterPage';
  

  
export default class LoginApp extends Component {  
  render() {  
    return (  
      // <Splash /> 
      <Login />
    );  
  }  
}  
  