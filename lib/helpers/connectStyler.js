import React from 'react';
import { View } from 'react-native';
import StylerProvider from '../components/StylerProvider';

/**
 * Connect an application component to the Styler
 * @param {React.Component} component 
 */
function connectStyler(component) {
    return () => <StylerProvider content={component} />;
}

export default connectStyler;
