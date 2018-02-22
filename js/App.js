import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wizard from './view/Wizard'
import Page from './view/Page'
import UUID from './utils/uuid'

export default class App extends React.Component {
  render() {
      const wizard = new Wizard();

      return (
        <Wizard>
          <Page route="First"/>
          <Page route="Second"/>
        </Wizard>
      )
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

