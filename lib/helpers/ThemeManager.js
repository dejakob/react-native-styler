import { _render as rerenderStyle } from './StyleManager';

let currentTheme = 'default';
let listeners = [];

/**
 * Get the current theme
 * @returns {String}
 */
function getCurrentTheme() : string {
    return currentTheme;
}

/**
 * Change the current theme that is being used
 * @param {String} themeName
 */
function changeTheme(themeName : string) {
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

export {
    getCurrentTheme,
    changeTheme,
    addOnThemeChangeListener,
    removeOnThemeChangeListener
};
