import { StyleSheet } from 'react-native';
import flatten from 'flat';

const SEPARATOR = '__';
const globalStyle = {};
let renderedStyleSheet = null;

function getStyle(styleKey) {
    return renderedStyleSheet[style];
}

function createStyle(styleObject) {
    const flattenedStyleObject = flatten(styleObject);
    const styleObjectWithSeperators = {};

    Object.keys(flattenedStyleObject).forEach(flattenedStyleToSeperatorObject);
    globalStyle = { ...globalStyle, ...styleObjectWithSeperators };

    function flattenedStyleToSeperatorObject(flattenedStyleKey) {
        const seperatedKey = flattenedStyleKey.replace('.', SEPARATOR);

        styleObjectWithSeperators[seperatedKey] = flattenedStyleObject[flattenedStyleKey];
    }
}

function _render() {
    renderedStyleSheet = StyleSheet.create(globalStyle);
}

export {
    getStyle,
    createStyle,
    _render
};
