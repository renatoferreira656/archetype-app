import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Wizard from './view/Wizard'
import Page from './view/Page'
import WizardPage from './view/WizardPage'
import UUID from './utils/uuid'

export default class App extends React.Component {
  render() {
      const wizard = new Wizard();

      return (
        <Wizard>
          <WizardPage route="f">
              <Text>Renato</Text>
          </WizardPage>
          <WizardPage route="s">
              <Text>Renato2</Text>
          </WizardPage>
          <WizardPage route="j">
              <Text>Renato3</Text>
          </WizardPage>
          <Page route="l">
            <Text>Renato5</Text>
          </Page>
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

