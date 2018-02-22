import React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import Page from './Page';

export default class WizardPage extends React.Component {
    render(){
        return (
            <Page>
                {this.props.children}
                <Button title="next" onPress={this.props.navigationNext} />
            </Page>
        );
    }
}