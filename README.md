# react-native-styler
Enhance styling on React Native

## The concept
* Separate files between styling and components
* Nested Stylesheets (React Native StyleSheet has only one level)
* Easy implementation of themes with instant rerender when theme changes
* Middlewares that can transform style declarations

## Methods
### connectStyler
Method to connect the styler with the root of your project
```
import { connectStyler } from 'react-native-styler';

/* Root component */

AppRegistry.registerComponent('StylerExample', () => connectStyler(<StylerExample />));
```

### createStyle
Create a styleSheet that should be added to the styler.
No export is needed, but the file should be imported anywhere in the project.
```
import { createStyle } from 'react-native-styler';

createStyle({
    header: {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    }
});
```

### getStyle
Get a style declaration from the styler
```
import { getStyle } from 'react-native-styler';

function Test() {
    return (
        <View
            style={getStyle('header__container')}
        />
    );
}
```

## Middlewares
### Color theme constants
It will replace a color constant name with the value of the current theme:

In theme.js:
```
import { createTheme } from 'react-native-styler';

createTheme({
    colors: {
        primary: '#ff0000'
    }
});
```

In style.js:
```
import { createStyle } from 'react-native-styler';

createStyle({
    header: {
        title: {
            color: 'theme:primary',
            fontWeight: '600'
        }
    }
});
```

### Implementation of vh and vw
Just like CSS, use vh and vw to create sizes compared to the height or width of the viewport

```
// 30% of the width of the screen
width: '30vw'
```

### h4s and w4s
In some cases, a component needs to resize based on the screen size.
By adding 'h4s' or 'w4s', you provide the height or width the element should be on an iphone 4S screen
and it will resize based on how much bigger / smaller the screen is.

```
// Font size will be bigger on an iPhone6 plus screen than an iPhone 5 for example
fontSize: '16h4s'
```