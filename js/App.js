import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wizard from './view/Wizard'
import Page from './view/Page'
import UUID from './utils/uuid'

export default class App extends React.Component {
  render() {
      const wizard = new Wizard();

      wizard.add(
        <Page key={UUID.v4()} /> 
      );

      return wizard.build();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

