import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Label extends React.Component {
    render() {
        console.log(this.props);
        return (<Text {...this.props} />);
    }
}