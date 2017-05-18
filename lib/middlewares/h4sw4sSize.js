import { Dimensions } from 'react-native';

const IPHONE_4S_HEIGHT = 480;
const IPHONE_4S_WIDTH = 320;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const RATIO_HEIGHT = SCREEN_HEIGHT / IPHONE_4S_HEIGHT;
const RATIO_WIDTH = SCREEN_WIDTH / IPHONE_4S_WIDTH;
const SUFFIX_HEIGHT = 'h4s';
const SUFFIX_WIDTH = 'w4s';

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

function h4sw4sSize(styleBlock) {
    const properties = Object.keys(styleBlock);
    const mutatedStyleBlock = {};

    properties.forEach(updatePropertyValue);

    return mutatedStyleBlock;

    function updatePropertyValue(property) {
        const initialValue = styleBlock[property];

        if (
            HEIGHT_WIDTH_PROPS.indexOf(property) > -1 &&
            typeof initialValue === 'string' &&
            (initialValue.indexOf(SUFFIX_HEIGHT) === initialValue.length - 3 ||
            initialValue.indexOf(SUFFIX_WIDTH) === initialValue.length - 3)
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
        const multiplier = Number(initialValue.replace(SUFFIX_HEIGHT, '').replace(SUFFIX_WIDTH, ''));

        mutatedStyleBlock[property] = Math.round(isHeight ? multiplier * RATIO_HEIGHT : multiplier * RATIO_WIDTH);
    }
}

export default h4sw4sSize;
