import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Page extends React.Component {
    render(){
        return (
            <View>
                {this.props.children}
            </View>
        );
    }
}