import React from 'react';
import { View, Text } from 'react-native';

import { Login } from './screens/Login';

export const MtApp = () => {

    return (
        <View
        style={{
            flex: 1,
        }}>
            <Login />
        </View>
    )
};
