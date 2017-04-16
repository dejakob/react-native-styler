import { StyleSheet } from 'react-native';
import flatten from 'flat';
import middlewares from '../middlewares';

const SEPARATOR = '__';
const globalStyle = {};
let renderedStyleSheet = null;

/**
 * Get a certain style id of the generated stylesheet
 * @param {String} styleKey
 * @returns {Number}
 */
function getStyle(styleKey : string) : number {
    return renderedStyleSheet[styleKey];
}

/**
 * Create a style block
 * @param {Object} styleObject 
 */
function createStyle(styleObject : object) {
    const flattenedStyleObject = flattenExceptLastLevel(styleObject);
    const styleObjectWithSeperators = {};

    Object.keys(flattenedStyleObject).forEach(enhance);
    globalStyle = { ...globalStyle, ...styleObjectWithSeperators };

    function enhance(flattenedStyleKey) {
        const seperatedKey = flattenedStyleKey.replace(/\./gi, SEPARATOR);

        styleObjectWithSeperators[seperatedKey] = applyMiddlewares(flattenedStyleObject[flattenedStyleKey]);
    }
}

/**
 * Flatten a style object except the last level,
 * so the style blocks are the properties of the object
 * @param {Object} styleObject 
 */
function flattenExceptLastLevel(styleObject) {
    const flattenedStyleObject = flatten(styleObject);
    const styleMap = {};

    Object.keys(flattenedStyleObject).forEach(fullFlatStyleKey => {
        const keyParts = fullFlatStyleKey.split('.');
        const styleProperty = keyParts[keyParts.length - 1];
        const styleValue = flattenedStyleObject[fullFlatStyleKey];

        keyParts.splice(keyParts.length - 1, 1);

        const firstKeyParts = keyParts.join('.');
        
        if (
            typeof styleMap[firstKeyParts] === 'object' &&
            styleMap[firstKeyParts] !== null
        ) {
            styleMap[firstKeyParts][styleProperty] = styleValue;
        }
        else {
            const mutation = {};

            mutation[styleProperty] = styleValue;
            styleMap[firstKeyParts] = mutation;
        }
    });

    return styleMap;
}

/**
 * Render the global styleSheet
 */
function render() {
    const tweakedGlobalStyle = applyMiddlewares(globalStyle);
    renderedStyleSheet = StyleSheet.create(tweakedGlobalStyle);
}

function applyMiddlewares(stylingObject : object) {
    let mutatedStylingObject = stylingObject;

    middlewares.forEach(middleware => {
        if (typeof middleware === 'function') {
            mutatedStylingObject = middleware(mutatedStylingObject);
        }
    });
    
    return mutatedStylingObject;
}

export {
    getStyle,
    createStyle,
    render,
    applyMiddlewares
};
