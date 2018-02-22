import React from 'react';
import { View, ViewPagerAndroid, Text } from 'react-native';
import Page from './Page';
import UUID from '../utils/uuid';

class Location {

    constructor() {
        this.event = {};
    }

    addListener(key, fnc) {
        this.event[key] = fnc;
    }

    call(key, prop) {
        this.event[key](prop);
    }
}

let location = new Location();

class Wizard extends React.Component {

    constructor(props) {
        super(props);
        this.pages = {};
        
        this.state = {
            location: ''
        };

        this.navigateTo = this.navigateTo.bind(this);
        this.getChildrens = this.getChildrens.bind(this);
        wiz = this;
        Location.addListener('url', (path)=>{
            wiz.setState({ location: path });
        });
    }

    componentWillMount() {
        this.setState({ location: this.props.first });
    }

    navigateTo(path) {
        this.setState({ location: path });
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
        let view = (<Text>ue</Text>);
        this.getChildrens().forEach((item) => {
            if (this.state.location == item.props.route) {
                view = item;
            }
        });
        return React.cloneElement(view, { navigateTo: this.navigateTo });
    }
}

export { Wizard as default, location}