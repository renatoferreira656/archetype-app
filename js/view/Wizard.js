import React from 'react';
import { View } from 'react-native';

class Wizard {
    constructor(){
        this.pages = [];
    }

    add(body) {
        this.pages.push(
            body
        );
        return this;
    }
    
    build(){
        return (
            <View>
               {this.pages}
            </View>
        )
    }
}

export default Wizard;