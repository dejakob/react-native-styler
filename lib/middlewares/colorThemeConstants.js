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

function colorThemeConstants(styleBlock) {
    const properties = Object.keys(styleBlock);
    const mutatedStyleBlock = {};
    const currentTheme = getCurrentTheme();

    properties.forEach(property => {
        const initialValue = styleBlock[property];

        if (
            COLOR_PROPS.indexOf(property) > -1 &&
            typeof initialValue === 'string' &&
            initialValue.indexOf(PREFIX) === 0
        ) {
            const themeColorProp = initialValue.replace(PREFIX, '');

            if (
                currentTheme.colors &&
                typeof currentTheme.colors[themeColorProp] === 'string'
            ) {
                mutatedStyleBlock[property] = currentTheme.colors[themeColorProp];
            } else {
                throw new Error(`Color constant ${themeColorProp} on current theme not found`);
            }
        }
        else {
            mutatedStyleBlock[property] = initialValue;
        }
    });

    return mutatedStyleBlock;
}

export default colorThemeConstants;
