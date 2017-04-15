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
    return renderedStyleSheet[style];
}

/**
 * Create a style block
 * @param {Object} styleObject 
 */
function createStyle(styleObject : object) {
    const flattenedStyleObject = flatten(styleObject);
    const styleObjectWithSeperators = {};

    Object.keys(flattenedStyleObject).forEach(flattenedStyleToSeperatorObject);
    globalStyle = { ...globalStyle, ...styleObjectWithSeperators };

    function flattenedStyleToSeperatorObject(flattenedStyleKey) {
        const seperatedKey = flattenedStyleKey.replace('.', SEPARATOR);

        styleObjectWithSeperators[seperatedKey] = flattenedStyleObject[flattenedStyleKey];
    }
}

/**
 * Render the global styleSheet
 */
function _render() {
    renderedStyleSheet = StyleSheet.create(globalStyle);
}

export {
    getStyle,
    createStyle,
    _render
};
