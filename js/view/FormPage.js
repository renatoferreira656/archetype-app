import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UUID from '../utils/uuid';

export default class FormPage extends React.Component {
    
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            fields: []
        }
    }

    componentWillMount() {
        let fields = React.Children.map(this.props.children, (item) => {
            let props = Object.assign({}, item.props);
            if(item.type.displayName === 'ActionButton'){
                props.onSubmit = this.onSubmit;
            }
            if(!props.key){
                props.key = UUID.v4();
            }
            return React.cloneElement(item, props);
        });
        this.setState({fields});
    }

    onSubmit(){
    }

    render() {
        return <View>{this.state.fields}</View>
    }
}