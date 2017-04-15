import React, { Component } from 'react';
import { changeTheme, changeThemeaddOnThemeChangeListener, removeOnThemeChangeListener } from '../helpers/ThemeManager';

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
