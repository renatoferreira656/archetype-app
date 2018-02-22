import React from 'react';
import { View, ViewPagerAndroid, Text } from 'react-native';
import Page from './Page';
import UUID from '../utils/uuid';

class Location {

    constructor() {
        this.route = {};
    }

    static setRouter(fnc) {
        this.route = fnc;
    }

    static url(path) {
        this.currentLocation = path;
        this.route(path);
    }

    static currentLocation() {
        return this.currentLocation;
    }
}

class Wizard extends React.Component {

    constructor(props) {
        super(props);
        this.pages = {};

        this.state = { location: '' };

        this.navigateTo = this.navigateTo.bind(this);
        this.getChildrens = this.getChildrens.bind(this);
        Location.setRouter((path) => {
            this.setState({ location: path });
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

export { Wizard as default, Location }