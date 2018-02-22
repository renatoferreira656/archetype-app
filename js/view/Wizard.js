import React from 'react';
import { View, ViewPagerAndroid, Text, Button } from 'react-native';
import Page from './Page'
import UUID from '../utils/uuid'

export default class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.pages = {};
        this.state = {
            index: 0
        };
        this.next = this.next.bind(this);
    }


    componentWillMount() {
        if (!this.props.children) {
            throw 'Wizard must have childrens';
        }

        if (!this.props.children.length) {
            this.setState({ location: this.props.children.props.route });
            return;
        }

        this.setState({ location: this.props.children[this.state.index].props.route });
    }

    next() {
        let index = this.state.index + 1;
        this.setState({ location: this.props.children[index].props.route, index });
    }

    render() {
        let view;
        this.props.children.forEach((item) => {
            if (this.state.location == item.props.route) {
                view = item;
                return;
            }
        });
        return (
            <View>
                {view}
                <Button title="next" onPress={this.next} />
            </View>
        );
    }
}


var styles = {
    viewPager: {
        flex: 1
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
}
