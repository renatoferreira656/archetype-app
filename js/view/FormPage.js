import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UUID from '../utils/uuid';

export default class FormPage extends React.Component {
    
    constructor(){
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            obj: {}
        };
    }

    onSubmit(){
        if(!this.props.onSubmit){
            return;
        }
        this.props.onSubmit(this.state.obj);
    }

    render() {
        let fields = React.Children.map(this.props.children, (item) => {
            let props = Object.assign({}, item.props);
            
            if(item.type.displayName === 'ActionButton'){
                props.onSubmit = this.onSubmit;
            }

            if(item.type.displayName === 'Input'){
                props.value = this.state.obj[item.props.name];
                props.onChangeText  = (text) => {
                    let obj = Object.assign({}, this.state.obj);
                    obj[item.props.name] = text;
                    this.setState({obj});
                }
            }

            return React.cloneElement(item, props);
        });   
        return <View>{fields}</View>
    }
}