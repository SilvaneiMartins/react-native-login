import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export const HeaderLogo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logo} >
                <Text style={styles.titleLogo} >L</Text>
            </View>

            <Text style={styles.title}>Bem Vindo ao Lungo!</Text>
        </View>
    )
}
