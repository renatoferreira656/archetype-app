import React from 'react';
import { View, ViewPagerAndroid, Text } from 'react-native';
import Page from './Page';
import UUID from '../utils/uuid';

class Location {
    static me() {
        if (!Location.INSTANCE) {
            Location.INSTANCE = new Location();
        }
        return Location.INSTANCE;
    }

    setRouter(fnc) {
        this.route = fnc;
    }

    url(path) {
        if (!path) {
            return this.currentLocation;
        }
        this.currentLocation = path;
        this.route(path);
        this.execCallbacks();
    }

    urlChange(cb) {
        if (!this.callbacks) {
            this.callbacks = [];
        }
        this.callbacks.push(cb);
    }

    execCallbacks() {
        if (!this.callbacks) {
            return;
        }
        this.callbacks.forEach((item) => {
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
        Location.me().setRouter((path) => {
            this.setState({ location: path });
        });
    }

    componentWillMount() {
        Location.me().url(this.props.first);
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
        let view = (<Text />);
        this.getChildrens().forEach((item) => {
            if (this.state.location == item.props.route) {
                view = item;
            }
        });
        return React.cloneElement(view);
    }
}

export { Wizard as default, Location }