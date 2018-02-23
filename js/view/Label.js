import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Label extends React.Component {
    render() {
        return (<Text {...this.props} />);
    }
}