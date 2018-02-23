import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class Input extends React.Component {
    render() {
        return (<TextInput name={this.props.name} />);
    }
}