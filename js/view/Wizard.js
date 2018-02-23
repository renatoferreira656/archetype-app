import React from 'react';
import { View, ViewPagerAndroid, Text } from 'react-native';
import Page from './Page';

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
        Location.me().setRouter((path) => {
            this.setState({ location: path });
        });
    }

    componentWillMount() {
        Location.me().url(this.props.first);
    }

    render() {
        let views = React.Children.map(this.props.children, (item) => {
            if (this.state.location == item.props.route) {
                return item;
            }
        });
        return ( 
            <View> 
                {views} 
            </View> 
        );
    }
}

export { Wizard as default, Location }