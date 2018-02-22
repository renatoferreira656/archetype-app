import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Wizard, { Location } from './view/Wizard'
import Page from './view/Page'
import UUID from './utils/uuid'
import ActionButton from './view/ActionButton';

export default class App extends React.Component {

  render() {
    return (
      <Wizard first="a">

        <Page route="a">
          <Text>a</Text>
          <TextInput name="name" />
          <TextInput name="rg" />
          <TextInput name="cpf" />
          <ActionButton to="b">B</ActionButton>
          <ActionButton to="c">C</ActionButton>
        </Page>

        <Page route="b">
          <Text>b</Text>
          <TextInput name="state" />
          <TextInput name="country" />
          <ActionButton to="d">D</ActionButton>
        </Page>

        <Page route="c">
          <Text>c</Text>
          <TextInput name="why" />
          <TextInput name="fork" />
          <ActionButton to="d" >D</ActionButton>
        </Page>

        <Page route="d">
          <Text>end</Text>
          <ActionButton onPress={() => { Location.url('a') }} >A</ActionButton>
        </Page>

      </Wizard>
    )
  }
}