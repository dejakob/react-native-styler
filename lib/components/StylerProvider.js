import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { render } from '../helpers/StyleManager';
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
        this._handleOrientationChange = this._handleOrientationChange.bind(this);

        this.state = {
            currentTheme: null
        };
    }

    componentWillMount() {
        addOnThemeChangeListener(this._handleThemeChange);
        changeTheme();
        Dimensions.addEventListener('change', this._handleOrientationChange);
    }

    componentWillUnmount() {
        removeOnThemeChangeListener(this._handleThemeChange);
        Dimensions.removeEventListener('change', this._handleOrientationChange);
    }

    /**
     * When the theme changes,
     * Update the currentTheme on the state
     * @param {String} newTheme 
     */
    _handleThemeChange(newThemeName) {
        this.setState({ currentTheme: newThemeName });
    }

    _handleOrientationChange() {
        render();
        this.setState({});
    }

    /**
     * @returns {React.Component}
     */
    render() {
        return React.createElement(() => this.props.children, {});
    }
}

export default StylerProvider;
