import { Dimensions } from 'react-native';


const SUFFIX_WIDTH = 'vw';
const SUFFIX_HEIGHT = 'vh';
const HEIGHT_WIDTH_PROPS = [
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
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'lineHeight',
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
    'paddingBottom',
    'fontSize'
];

function heightWidthViewport(styleBlock) {
    const VIEWPORT_HEIGHT = Dimensions.get('window').height;
    const VIEWPORT_WIDTH = Dimensions.get('window').width;
    
    const properties = Object.keys(styleBlock);
    const mutatedStyleBlock = {};

    properties.forEach(updatePropertyValue);

    return mutatedStyleBlock;

    function updatePropertyValue(property) {
        const initialValue = styleBlock[property];

        if (
            HEIGHT_WIDTH_PROPS.indexOf(property) > -1 &&
            typeof initialValue === 'string' &&
            (initialValue.indexOf(SUFFIX_HEIGHT) === initialValue.length - 2 ||
            initialValue.indexOf(SUFFIX_WIDTH) === initialValue.length - 2)
        ) {
            setUpdatedHeightWidth(property);
        }
        else {
            mutatedStyleBlock[property] = initialValue;
        }
    }

    function setUpdatedHeightWidth(property) {
        const initialValue = styleBlock[property];
        const isHeight = initialValue.indexOf(SUFFIX_HEIGHT) > -1;
        const multiplier = parseFloat(initialValue.replace(SUFFIX_HEIGHT, '').replace(SUFFIX_WIDTH, ''));

        mutatedStyleBlock[property] = Math.round(isHeight ? multiplier * VIEWPORT_HEIGHT / 100 : multiplier * VIEWPORT_WIDTH / 100);
    }
}

export default heightWidthViewport;
