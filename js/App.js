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
    this.state = { url: '' , obj: {} };
    this.onSubmit = this.onSubmit.bind(this);
    Location.me().urlChange(()=>{
      this.setState({url: Location.me().url()});
    });
  }

  onSubmit(result){
    let obj = Object.assign(result, this.state.obj);
    this.setState({obj})
  }

  render() {
    return (
      <Wizard first="a">

        <FormPage route="a" onSubmit={this.onSubmit}>
          <Label>{this.state.url}</Label>
          <Input name="name" />
          <Input name="rg" />
          <Input name="cpf" />
          <ActionButton to="b" >B</ActionButton>
          <ActionButton to="c">C</ActionButton>
        </FormPage>

        <FormPage route="b" onSubmit={this.onSubmit}>
          <Label>{this.state.url}</Label>
          <Input name="state" />
          <Input name="country" />
          <ActionButton to="d">D</ActionButton>
        </FormPage>

        <FormPage route="c" onSubmit={this.onSubmit}>
          <Label>{this.state.url}</Label>
          <Input name="why" />
          <Input name="fork" />
          <ActionButton to="d" >D</ActionButton>
        </FormPage>

        <FormPage route="d" onSubmit={this.onSubmit}>
          <Label>{JSON.stringify(this.state.obj)}</Label>
          <ActionButton onPress={() => { Location.me().url('a') }} >A</ActionButton>
        </FormPage>

      </Wizard>
    )
  }
}