import React from 'react';
import { View, ViewPagerAndroid } from 'react-native';
import Page from './Page'
import UUID from '../utils/uuid'

class Wizard {
    constructor(){
        this.pages = [];
    }

    add(body) {
        this.pages.push((<View key={UUID.v4()}>{body}</View>));
        return this;
    }
    
    build(){
        return (
            <ViewPagerAndroid 
                style={styles.viewPager}
                initialPage={0}>
                {this.pages}
            </ViewPagerAndroid>
        )
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

export default Wizard;