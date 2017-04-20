import React, { Component, Children } from 'react';
import { View, Text } from 'react-native'
import { changeTheme, addOnThemeChangeListener, removeOnThemeChangeListener } from '../helpers/ThemeManager';

/**
 * StylerProvider
 */
class StylerProvider extends Component {

    /**
     * @constructor
     */
    constructor(props, context) {
        super(props, context);

        this._handleThemeChange = this._handleThemeChange.bind(this);

        this.state = {
            currentTheme: null
        };
    }

    componentWillMount() {
        addOnThemeChangeListener(this._handleThemeChange);
        changeTheme();
    }

    componentWillUnmount() {
        removeOnThemeChangeListener(this._handleThemeChange);
    }

    /**
     * When the theme changes,
     * Update the currentTheme on the state
     * @param {String} newTheme 
     */
    _handleThemeChange(newThemeName : string) {
        this.setState({ currentTheme: newThemeName });
    }

    /**
     * @returns {React.Component}
     */
    render() {
        return React.cloneElement(this.props.content, { ...this.props, currentTheme: this.state.currentTheme });
    }
}

export default StylerProvider;
