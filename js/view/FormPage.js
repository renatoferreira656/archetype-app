import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UUID from '../utils/uuid';

export default class FormPage extends React.Component {
    
    constructor(){
        super();
        this.state = {
            obj: {}
        };
    }

    render() {
        let fields = React.Children.map(this.props.children, (item) => {
            let props = Object.assign({}, item.props);
            
            if(item.type.displayName === 'Input'){
                props.value = this.state.obj[item.props.name];
                props.onChangeText  = (text) => {
                    let obj = Object.assign({}, this.state.obj);
                    obj[item.type.name] = text;
                    this.setState({obj});
                }
            }

            if(!props.key){
                props.key = UUID.v4();
            }

            return React.cloneElement(item, props);
        });        
        return <View>{fields}</View>
    }
}