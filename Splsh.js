import React, { Component } from 'react';
import {View , Text, StyleSheet} from 'react-native';


export default class Splsh extends Component {
    render() {
        return (
            <View style ={styles.wrapper}>
                <View style = {styles.titlewrapper}>
                    <Text style = {styles.title}>'Hello World!'</Text>
                </View>
                <View>
                    <Text style = {styles.subtitle}>'Powered by react native</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {backgroundColor: '#27ae60', 
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
        fontWeight:'normal',
        paddingBottom: 20
    },
    titlewrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});