/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Button } from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Import connectStyler
import { connectStyler, changeTheme } from 'react-native-styler';

// Import all themes and styling
import './themes';
import './styling';

import Header from './components/Header';

export default class StylerExample extends Component {
  render() {
    return (
      <View>
        <Header
          title="TITLE"
        />
        <Button
          title="Use blue theme"
          onPress={() => changeTheme('blue')}
        />
      </View>
    )
  }
}

// Connect the styler to the rootComponent
AppRegistry.registerComponent('StylerExample', () => connectStyler(<StylerExample />));
