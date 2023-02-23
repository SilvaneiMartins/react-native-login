import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { HeaderLogo } from '../../../components/HeaderLogo';

export const Cadastro = () => {
    return (
        <View style={styles.container}>
            <HeaderLogo />

            <Text style={styles.subtitle}>
                Registre-se para continuar
            </Text>
        </View>
    )
}
