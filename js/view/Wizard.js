import React from 'react';
import { View, ViewPagerAndroid, Text } from 'react-native';
import Page from './Page'
import UUID from '../utils/uuid'

export default class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.pages = {};
        this.state = {};
    }


    componentWillMount(){
        if(!this.props.children){
            throw 'Wizard must have childrens';
        }

        if(!this.props.children.length) {
            this.setState({location:this.props.children.props.route});
            return;
        }

        this.setState({location: this.props.children[0].props.route});
    }

    render() {
        let view;
        this.props.children.forEach((item) => {
            if(this.state.location == item.props.route) {
                view = item;
                return;
            }
        });
        return view;
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
