import React, { Component } from 'react';
import {View , Text, StyleSheet} from 'react-native';


export default class Splsh extends Component {
    render() {
        return (
            <View style ={style.wrapper}>
                <Text style = {style.title}>'Hello World!'</Text>
                <Text style = {style.subtitle}>'Powered by react native</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    wrapper: {backgroundColor: 'darkblue', 
    flex:1, 
    alignItems: 'center', 
    justifyContent:'center'
    },
    title: {
        color:'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitle: {
        color:'white',
        fontWeight:'lighter'
    }
});