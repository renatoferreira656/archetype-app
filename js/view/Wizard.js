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
        this.getChildrens = this.getChildrens.bind(this);
    }


    componentWillMount() {
        this.setState({ location: this.getChildrens()[this.state.index].props.route });
    }

    next() {
        let index = 0;
        if(this.state.index < this.getChildrens().length - 1){
            index = this.state.index + 1;
        }
        this.setState({ location: this.getChildrens()[index].props.route, index });
    }

    getChildrens(){
        if (!this.props.children) {
            throw 'Wizard must have childrens';
        }

        if (!this.props.children.length) {
            return [this.props.children];
        }
        return this.props.children;
    }

    render() {
        let view;
        this.getChildrens().forEach((item) => {
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
