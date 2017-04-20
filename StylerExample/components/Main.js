import React from 'react';
import { View, Text, Button } from 'react-native';
import { getStyle, changeTheme } from 'react-native-styler';

/**
 * <Main />
 */
function Main() {
    return (
        <View>
            <Text
                style={getStyle('main__title')}
            >
                Styler Example
            </Text>
            <Button
                title="Use blue theme"
                onPress={() => changeTheme('blue')}
            />
        </View>
    );
}

export default Main;
