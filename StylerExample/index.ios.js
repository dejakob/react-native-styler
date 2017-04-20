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
import { connectStyler, changeTheme } from 'react-native-styler';
import theme from './themes/default.theme';
import blueTheme from './themes/blue.theme';
import Header from './Header';

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

AppRegistry.registerComponent('StylerExample', () => connectStyler(<StylerExample />));
