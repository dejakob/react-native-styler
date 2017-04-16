/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StylerProvider } from 'react-native-styler';
import Header from './Header';

export default class StylerExample extends Component {
  render() {
    return (
      <StylerProvider>
        <View>
          <Header
            title="TITLE"
          />
        </View>
      </StylerProvider>
    );
  }
}

AppRegistry.registerComponent('StylerExample', () => StylerExample);
