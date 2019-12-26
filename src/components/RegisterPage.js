import React, { Component } from 'react';
import {View , Text, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';    

export default class RegisterPage extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <TextInput 
                    style = {styles.input}
                    placeholder="UserName"
                    placeholderTextColor = 'white'
                    returnKeyType = "next"
                    onSubmitEditing = {() => this.emailInput.focus()}/>

                <TextInput 
                    style = {styles.input}
                    placeholder="username or email"
                    placeholderTextColor = 'white'
                    returnKeyType="next" 
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    keyboardType= 'email-address'
                    autoCapitalize= 'none'
                    autoCorrect= {false}
                    ref = {(input) => this.emailInput =input} />
                
                <TextInput 
                    style = {styles.input}
                    placeholder="password"
                    placeholderTextColor = 'white'
                    secureTextEntry 
                    returnKeyType="go"
                    ref = {(input) => this.passwordInput = input}/> 

                <TouchableOpacity 
                    style = {styles.buttonContainer}
                    onPress = {() => this.props.navigation.navigate('Login')}>
                    <Text style = {styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 40
    },
    input: {
        height: 40,
        backgroundColor:'rgba(255,255,255,0.4)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10,
        fontSize:16,
        opacity:0.8,
    }
});