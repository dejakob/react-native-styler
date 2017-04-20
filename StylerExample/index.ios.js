/**
 * Sample React Native Styler App
 */
import React, { Component } from 'react';
import { AppRegistry, View, Button } from 'react-native';

// Import connectStyler
import { connectStyler, getStyle } from 'react-native-styler';

// Import all themes and styling
import './themes';
import './styling';

// Components to import
import Header from './components/Header';
import Main from './components/Main';

export default class StylerExample extends Component {
  render() {
    return (
      <View
        style={getStyle('app')}
      >
        <Header
          title="TITLE"
        />
        <Main

        />
      </View>
    )
  }
}

// Connect the styler to the rootComponent
AppRegistry.registerComponent('StylerExample', () => connectStyler(<StylerExample />));
