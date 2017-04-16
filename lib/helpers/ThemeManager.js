import { render as rerenderStyle } from './StyleManager';

const DEFAULT_THEME = 'default';
const themes = {
    default: {

    }
};

let currentTheme = DEFAULT_THEME;
let listeners = [];

/**
 * Get the current theme
 * @returns {Object}
 */
function getCurrentTheme() : object {
    return themes[currentTheme];
}

/**
 * Change the current theme that is being used
 * @param {String} themeName
 */
function changeTheme(themeName : string = DEFAULT_THEME) {
    currentTheme = themeName;
    listeners.forEach(invokeListener);
    rerenderStyle();

    function invokeListener(listener) {
        if (typeof listener === 'function') {
            listener(themeName);
        }
    }
}

/**
 * Add a listener for whenever the theme changes
 * @param {Function} listener
 */
function addOnThemeChangeListener(listener : func) {
    if (typeof listener === 'function') {
        listeners.push(listener);
    }
}

/**
 * Remove a listener that was attached before
 * @param {Function} listener 
 */
function removeOnThemeChangeListener(listener : func) {
    const index = listeners.indexOf(listener);

    if (index > -1) {
        listerners.splice(index, 1);
    }
}

function createTheme(theme, themeName = DEFAULT_THEME) {
    if (typeof theme === 'object' && theme !== null) {
        themes[themeName] = theme;
    }
}

export {
    getCurrentTheme,
    changeTheme,
    addOnThemeChangeListener,
    removeOnThemeChangeListener,
    createTheme
};
