import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Wizard from './view/Wizard'
import Page from './view/Page'
import UUID from './utils/uuid'
import ActionButton from './view/ActionButton';
import Location from './utils/Location';

export default class App extends React.Component {

  render() {
    return (
      <Wizard first="a">
        <Page route="a">
          <Text>a</Text>
          <TextInput name="name" />
          <TextInput name="rg" />
          <TextInput name="cpf" />
          <ActionButton title="b" to="b" />
          <ActionButton title="c" to="c" />
        </Page>

        <Page route="b">
          <Text>b</Text>
          <TextInput name="state" />
          <TextInput name="country" />
          <ActionButton title="c" to="d" />
        </Page>

        <Page route="c">
          <Text>c</Text>
          <TextInput name="why" />
          <TextInput name="fork" />
          <ActionButton title="c" to="d" />
        </Page>

        <Page route="d">
          <Text>end</Text>
          <ActionButton title="c" onPress={() => { Location.call('url', 'a') }} />
        </Page>
      </Wizard>
    )
  }
}