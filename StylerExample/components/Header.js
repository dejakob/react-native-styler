import React from 'react';
import { View, Text } from 'react-native';
import { getStyle } from 'react-native-styler';

/**
 * <Header />
 */
function Header(props) {
    return (
        <View
            style={getStyle('header__container')}
        >
            <View
                style={getStyle('header__backButton')}
            />
            <Text
                style={getStyle('header__title')}
            >
                {props.title}
            </Text>
            <View
                style={getStyle('header__closeButton')}
            />
        </View>
    );
}

export default Header;
