import { render as rerenderStyle } from './StyleManager';

const DEFAULT_THEME = 'default';
const themes = {
    default: {}
};

let currentTheme = DEFAULT_THEME;
let listeners = [];

/**
 * Get the current theme
 * @returns {Object}
 */
function getCurrentTheme() {
    return themes[currentTheme];
}

/**
 * Change the current theme that is being used
 * @param {String} themeName
 */
function changeTheme(themeName) {
    currentTheme = themeName || DEFAULT_THEME;
    listeners.forEach(invokeListener);
    rerenderStyle();

    function invokeListener(listener) {
        if (typeof listener === 'function') {
            listener(themeName || DEFAULT_THEME);
        }
    }
}

/**
 * Add a listener for whenever the theme changes
 * @param {Function} listener
 */
function addOnThemeChangeListener(listener) {
    if (typeof listener === 'function') {
        listeners.push(listener);
    }
}

/**
 * Remove a listener that was attached before
 * @param {Function} listener 
 */
function removeOnThemeChangeListener(listener) {
    const index = listeners.indexOf(listener);

    if (index > -1) {
        listeners.splice(index, 1);
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
