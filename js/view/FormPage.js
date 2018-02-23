import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FormPage extends React.Component {
    
    componentWillMount() {
        this.props.children.map(()=>{

        });
    }

    render() {
        return <View>{this.props.children}</View>
    }
}