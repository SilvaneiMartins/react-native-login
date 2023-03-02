import React from 'react';
import { View, Text } from 'react-native';

export const Search = () => {
    return (
        <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Text style={{ fontSize: 30 }} >Pesquisar</Text>
    </View>
    )
}
