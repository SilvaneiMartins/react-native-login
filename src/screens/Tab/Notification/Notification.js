import React from 'react';
import { View, Text } from 'react-native';

export const Notification = () => {
    return (
        <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}
    >
        <Text style={{ fontSize: 30 }} >Notificação</Text>
    </View>
    )
}
