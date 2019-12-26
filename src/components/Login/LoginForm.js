import React, { Component } from 'react';
import {View , Text, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'; 
import {} from 'react-navigation'   
import RegisterPage from '../RegisterPage';
import HomePage from '../HomePage';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class LoginForm extends Component {
    render() {

        return (
            <View style ={styles.container}>
                <StatusBar 
                    barStyle = "light-content"
                    backgroundColor = "#e67e22"
                />
                <TextInput 
                    style = {styles.input}
                    placeholder="username or email"
                    placeholderTextColor = 'white'
                    returnKeyType="next" 
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    keyboardType= 'email-address'
                    autoCapitalize= 'none'
                    autoCorrect= {false} />
                
                <TextInput 
                    style = {styles.input}
                    placeholder="password"
                    placeholderTextColor = 'white'
                    secureTextEntry 
                    returnKeyType="go"
                    ref = {(input) =>this.passwordInput = input}/> 

                <TouchableHighlight style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}
                    onPress = {() =>this.navigation.navigate('Home')}>Login</Text>
                </TouchableHighlight>

                <Text 
                    style = {styles.register}
                    onPress = {() =>this.props.navigation.navigate('Register')}>
                    Register Here</Text>
            </View>
        );
    }
}


export class App extends Component {
    render(){
        return(
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator ({
    Login: LoginForm,
    Register: RegisterPage,
    Home: HomePage
})

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
    },
    buttonContainer: {
        backgroundColor:'#2980b9' ,
        paddingVertical: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '700'
    },
    register: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        opacity: 0.7,
        paddingTop: 15
    }
});