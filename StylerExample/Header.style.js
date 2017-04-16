import { createStyle } from 'react-native-styler';

export default createStyle({
    header: {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        backButton: {
            backgroundColor: 'theme:secondary'
        },
        title: {
            color: 'theme:primary'
        }
    }
});