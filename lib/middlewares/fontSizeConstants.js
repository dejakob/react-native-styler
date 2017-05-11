import { getCurrentTheme } from '../helpers/ThemeManager';

const PREFIX = 'theme:';
const FONT_SIZE_PROPS = [
    'fontSize'
];

/**
 * Change all fontSize theme constants by the values of the current theme
 * e.g. fontSize: 'theme:h1' will take the value of currentTheme.h1
 * @param {Object} styleBlock 
 */
function fontSizeConstants(styleBlock) {
    const properties = Object.keys(styleBlock);
    const mutatedStyleBlock = {};
    const currentTheme = getCurrentTheme();

    properties.forEach(updatePropertyValue);

    return mutatedStyleBlock;

    /**
     * 
     * @param {String} property 
     */
    function updatePropertyValue(property) {
        const initialValue = styleBlock[property];

        if (
            FONT_SIZE_PROPS.indexOf(property) > -1 &&
            typeof initialValue === 'string' &&
            initialValue.indexOf(PREFIX) === 0
        ) {
            changeFontSize(property);
        }
        else {
            mutatedStyleBlock[property] = initialValue;
        }
    }

    /**
     * 
     */
    function changeFontSize(property) {
        const initialValue = styleBlock[property];
        const fontSizeProp = initialValue.replace(PREFIX, '');

        if (
            currentTheme.fontSizes &&
            typeof currentTheme.fontSizes[fontSizeProp] === 'string'
        ) {
            mutatedStyleBlock[property] = currentTheme.fontSizes[fontSizeProp];
        }
        else {
            throw new Error(`Font size constant ${fontSizeProp} on current theme not found`);
        }
    }
}

export default fontSizeConstants;
