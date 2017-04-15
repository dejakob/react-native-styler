import React, { Component } from 'react';
import { addOnThemeChangeListener } from '../helpers/ThemeManager';

/**
 * StylerProvider
 */
class StylerProvider extends Component {

    /**
     * @constructor
     */
    constructor() {
        super();

        this._handleThemeChange = this._handleThemeChange.bind(this);

        this.state = {
            currentTheme: null
        };

        addOnThemeChangeListener(this._handleThemeChange);
    }

    /**
     * When the theme changes,
     * Update the currentTheme on the state
     * @param {String} newTheme 
     */
    _handleThemeChange(newTheme : string) {
        this.setState({ currentTheme: newTheme });
    }

    /**
     * @returns {React.Component}
     */
    render() {
        return (
            <this.props.children
                {...this.props}
            />
        );
    }
}

export default StylerProvider;
