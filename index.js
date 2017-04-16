import StylerProvider from './lib/components/StylerProvider';
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
    removeOnThemeChangeListener
} from './lib/helpers/ThemeManager';

export {
    StylerProvider,

    getStyle,
    createStyle,
    render,
    applyMiddlewares,

    getCurrentTheme,
    changeTheme,
    addOnThemeChangeListener,
    removeOnThemeChangeListener
};
