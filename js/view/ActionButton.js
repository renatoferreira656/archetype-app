import React from 'react';
import { Button } from 'react-native';
import Wizard, { Location } from './Wizard';

export default class ActionButton extends React.Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        if(this.props.to){
            Location.call('url', this.props.to);
            return;
        }
        this.props.onPress();
    }

    render() {
        return ( <Button onPress={this.onClick} title={this.props.title} /> );
    }
}