import { createStyle } from 'react-native-styler';

createStyle({
    header: {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        backButton: {
            backgroundColor: 'theme:secondary',
            height: 20,
            width: '0.3vw'
        },
        title: {
            color: 'theme:primary',
            fontWeight: '600'
        },
        closeButton: {
            backgroundColor: 'theme:secondary',
            height: 20,
            width: '0.3vw'
        }
    }
});
