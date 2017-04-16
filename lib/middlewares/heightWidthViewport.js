import { Dimensions } from 'react-native';

const VIEWPORT_HEIGHT = Dimensions.get('window').height;
const VIEWPORT_WIDTH = Dimensions.get('window').width;

const SUFFIX_WIDTH = 'vw';
const SUFFIX_HEIGHT = 'vh';
const COLOR_PROPS = [
    'height',
    'minHeight',
    'maxHeight',
    'width',
    'minWidth',
    'maxWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopWidth',
    'borderWidth',
    'borderRadius',
    'top',
    'left',
    'bottom',
    'right',
    'margin',
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'padding',
    'paddingTop',
    'paddingLeft',
    'paddingRight',
    'paddingBottom'
];

function heightWidthViewport(styleBlock) {
    const properties = Object.keys(styleBlock);
    const mutatedStyleBlock = {};

    properties.forEach(updatePropertyValue);

    return mutatedStyleBlock;

    function updatePropertyValue(property) {
        const initialValue = styleBlock[property];

        if (
            initialValue.indexOf(SUFFIX_HEIGHT) === initialValue.length - 2 ||
            initialValue.indexOf(SUFFIX_WIDTH) === initialValue.length - 2
        ) {

        }
        else {
            mutatedStyleBlock[property] = initialValue;
        }
    }
}

export default heightWidthViewport;
