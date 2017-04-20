import React from 'react';
import { View, Button } from 'react-native';
import { changeTheme } from 'react-native-styler';

/**
 * <Main />
 */
function Main() {
    return (
        <View>
            <Button
                title="Use blue theme"
                onPress={() => changeTheme('blue')}
            />
        </View>
    );
}

export default Main;
