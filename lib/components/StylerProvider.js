import React, { Component } from 'react';
import { View } from 'react-native'
import { changeTheme, addOnThemeChangeListener, removeOnThemeChangeListener } from '../helpers/ThemeManager';

/**
 * StylerProvider
 */
class StylerProvider extends Component {

    /**
     * @constructor
     */
    constructor() {
        super();
        changeTheme();

        this._handleThemeChange = this._handleThemeChange.bind(this);

        this.state = {
            currentTheme: null
        };
    }

    componentWillMount() {
        addOnThemeChangeListener(this._handleThemeChange);
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
        return React.cloneElement(this.props.children, {
            ...this.props,
            currentThemeName: this.state.currentTheme
        });
    }
}

export default StylerProvider;
