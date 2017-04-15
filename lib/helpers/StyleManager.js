import { StyleSheet } from 'react-native';
import flatten from 'flat';

const SEPARATOR = '__';
const globalStyle = {};
let renderedStyleSheet = null;

/**
 * Get a certain style id of the generated stylesheet
 * @param {String} styleKey
 * @returns {Number}
 */
function getStyle(styleKey : string) : number {
    console.log('renderedStyleSheet', renderedStyleSheet);
    return renderedStyleSheet[styleKey];
}

/**
 * Create a style block
 * @param {Object} styleObject 
 */
function createStyle(styleObject : object) {
    const flattenedStyleObject = flattenExceptLastLevel(styleObject);
    const styleObjectWithSeperators = {};

    Object.keys(flattenedStyleObject).forEach(flattenedStyleToSeperatorObject);
    globalStyle = { ...globalStyle, ...styleObjectWithSeperators };

    function flattenedStyleToSeperatorObject(flattenedStyleKey) {
        const seperatedKey = flattenedStyleKey.replace(/\./gi, SEPARATOR);

        styleObjectWithSeperators[seperatedKey] = flattenedStyleObject[flattenedStyleKey];
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

    console.log('tweaked', tweakedGlobalStyle);
    renderedStyleSheet = StyleSheet.create(tweakedGlobalStyle);
}

function applyMiddlewares(stylingObject : object) {
    // To be implemented
    return stylingObject;
}

export {
    getStyle,
    createStyle,
    render,
    applyMiddlewares
};
