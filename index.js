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
import StylerProvider from './lib/components/StylerProvider';

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

    StylerProvider
};
