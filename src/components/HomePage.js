import React, { Component } from 'react';
import {View , Text, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';    

export default class HomePage extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}> Welcome To HomePage</Text>
            </View>
        );
    }
}