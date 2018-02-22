import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Page extends React.Component {
    render(){
        return (
            <View>
                <Text> {this.props.route} </Text>
                <Text>Open up App.js to staadsfdrt working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}