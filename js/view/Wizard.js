import React from 'react';
import { View, ViewPagerAndroid, Text } from 'react-native';
import Page from './Page';
import UUID from '../utils/uuid';

class Location {

    static setRouter(fnc) {
        Location.route = fnc;
    }

    static url(path) {
        if(!path){
            return Location.currentLocation;
        }
        Location.currentLocation = path;
        Location.route(path);
        Location.execCallbacks();
    }

    static urlChange(cb){
        if(!Location.callbacks){
            Location.callbacks = [];
        }
        Location.callbacks.push(cb);
    }

    static execCallbacks(){
        if(!Location.callbacks){
            return;
        }
        Location.callbacks.forEach((item)=>{
            item();
        });
    }
}

class Wizard extends React.Component {

    constructor(props) {
        super(props);
        this.pages = {};
        this.state = { location: '' };
        this.getChildrens = this.getChildrens.bind(this);
        Location.setRouter((path) => {
            this.setState({ location: path });
        });
    }

    componentWillMount() {
        Location.url(this.props.first);
    }

    getChildrens() {
        if (!this.props.children) {
            throw 'Wizard must have childrens';
        }

        if (!this.props.children.length) {
            return [this.props.children];
        }
        return this.props.children;
    }

    render() {
        let view = (<Text/>);
        this.getChildrens().forEach((item) => {
            if (this.state.location == item.props.route) {
                view = item;
            }
        });
        return React.cloneElement(view);
    }
}

export { Wizard as default, Location }