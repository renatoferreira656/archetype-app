import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Page from './view/Page'

export default class App extends React.Component {
  render() {
    return (
      <Page/>
    );
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
