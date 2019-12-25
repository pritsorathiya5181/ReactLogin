import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from '../Login/LoginForm';

export default class Login extends Component {
    render(){
        return(
            <KeyboardAvoidingView style = {styles.container}>
                <View style = {styles.logocontainer}>
                    <Image 
                        style = {styles.logo}
                        source = {require('../Images/reactlogo.png')} /> 
                    <Text style = {styles.title}>This is Login Page using ReactNtive with android</Text>
                </View>
                <View style = {styles.formcontainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#e67e22',
        flex: 1
    },
    logocontainer:{ 
        alignItems:'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width:120,
        height:120,
    },
    title:{
        color:'white',
        marginTop: 10,
        width:160,
        textAlign:'center',
        opacity: 0.9 
    },
    formcontaier:{
        
    }
});