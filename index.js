import {
    getStyle,
    createStyle,
    render,
    applyMiddlewares
} from './lib/helpers/StyleManager';
import { 
    getCurrentTheme,
    changeTheme,
    addOnThemeChangeListener,
    removeOnThemeChangeListener,
    createTheme
} from './lib/helpers/ThemeManager';
import connectStyler from './lib/helpers/connectStyler';

export {
    getStyle,
    createStyle,
    render,
    applyMiddlewares,

    getCurrentTheme,
    changeTheme,
    addOnThemeChangeListener,
    removeOnThemeChangeListener,
    createTheme,

    connectStyler
};
