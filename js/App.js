import React from 'react';
import { StyleSheet } from 'react-native';
import Wizard, { Location } from './view/Wizard'
import FormPage from './view/FormPage'
import UUID from './utils/uuid'
import ActionButton from './view/ActionButton';
import Input from './view/Input';
import Label from './view/Label';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { url: '' };
    Location.me().urlChange(()=>{
      this.setState({url: Location.me().url()});
    });
  }

  render() {
    return (
      <Wizard first="a">
        <FormPage route="a">
          <Label>{this.state.url}</Label>
          <Input name="name" />
          <Input name="rg" />
          <Input name="cpf" />
          <ActionButton to="b">B</ActionButton>
          <ActionButton to="c">C</ActionButton>
        </FormPage>

        <FormPage route="b">
          <Label>{this.state.url}</Label>
          <Input name="state" />
          <Input name="country" />
          <ActionButton to="d">D</ActionButton>
        </FormPage>

        <FormPage route="c">
          <Label>{this.state.url}</Label>
          <Input name="why" />
          <Input name="fork" />
          <ActionButton to="d" >D</ActionButton>
        </FormPage>

        <FormPage route="d">
          <Label>{this.state.url}</Label>
          <ActionButton onPress={() => { Location.me().url('a') }} >A</ActionButton>
        </FormPage>

      </Wizard>
    )
  }
}