import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Wizard, { Location } from './view/Wizard'
import FormPage from './view/FormPage'
import UUID from './utils/uuid'
import ActionButton from './view/ActionButton';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { url: '' };
    Location.urlChange(() => {
      this.setState({ url: Location.url() });
    });
  }

  render() {
    let url = this.state.url;
    return (
      <Wizard first="a">
        <FormPage route="a">
          <Text>{url}</Text>
          <TextInput name="name" />
          <TextInput name="rg" />
          <TextInput name="cpf" />
          <ActionButton to="b">B</ActionButton>
          <ActionButton to="c">C</ActionButton>
        </FormPage>

        <FormPage route="b">
          <Text>{url}</Text>
          <TextInput name="state" />
          <TextInput name="country" />
          <ActionButton to="d">D</ActionButton>
        </FormPage>

        <FormPage route="c">
          <Text>{url}</Text>
          <TextInput name="why" />
          <TextInput name="fork" />
          <ActionButton to="d" >D</ActionButton>
        </FormPage>

        <FormPage route="d">
          <Text>{url}</Text>
          <ActionButton onPress={() => { Location.me().url('a') }} >A</ActionButton>
        </FormPage>

      </Wizard>
    )
  }
}