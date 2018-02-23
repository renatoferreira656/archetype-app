import React from 'react';
import { Button } from 'react-native';
import { Location } from './Wizard';

export default class ActionButton extends React.Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        if (this.props.onSubmit) {
            this.props.onSubmit();
        }

        if (this.props.onPress) {
            this.props.onPress();
        }
        if (this.props.to) {
            Location.me().url(this.props.to);
        }
    }

    render() {
        return (<Button onPress={this.onClick} title={this.props.children} />);
    }
}