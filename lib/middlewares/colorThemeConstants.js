import { getCurrentTheme } from '../helpers/ThemeManager';

const PREFIX = 'theme:';
const COLOR_PROPS = [
    'color',
    'backgroundColor',
    'borderTopColor',
    'borderLeftColor',
    'borderRightColor',
    'borderBottomColor',
    'borderColor',
    'shadowColor',
    'textShadowColor',
    'textDecorationColor',
    'selectionColor'
];

/**
 * Change all color theme constants by the values of the current theme
 * e.g. color: 'theme:primary' will take the value of currentTheme.colors.primary
 * @param {Object} styleBlock 
 */
function colorThemeConstants(styleBlock) {
    const properties = Object.keys(styleBlock);
    const mutatedStyleBlock = {};
    const currentTheme = getCurrentTheme();

    properties.forEach(updatePropertyValue);

    return mutatedStyleBlock;

    function updatePropertyValue(property) {
        const initialValue = styleBlock[property];

        if (
            COLOR_PROPS.indexOf(property) > -1 &&
            typeof initialValue === 'string' &&
            initialValue.indexOf(PREFIX) === 0
        ) {
            changeColor();
        }
        else {
            mutatedStyleBlock[property] = initialValue;
        }
    }

    function changeColor() {
        const themeColorProp = initialValue.replace(PREFIX, '');

        if (
            currentTheme.colors &&
            typeof currentTheme.colors[themeColorProp] === 'string'
        ) {
            mutatedStyleBlock[property] = currentTheme.colors[themeColorProp];
        }
        else {
            throw new Error(`Color constant ${themeColorProp} on current theme not found`);
        }
    }
}

export default colorThemeConstants;
