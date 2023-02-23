import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Pressable } from 'react-native';

import { styles } from './styles';
import { HeaderLogo } from '../../../components/HeaderLogo';

export const ForgotPassword = () => {
    const navigation = useNavigation();

    const handleGoToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container} >
           <HeaderLogo />

           <Text style={styles.subtitle}>
                Recupere sua Senha
           </Text>

           <View style={styles.contentInputEmail}>
                <AntDesign name="user" size={24} color="lightgray" />
                <TextInput
                    style={styles.textInputEmail}
                    placeholder="Digite seu e-mail"
                />
           </View>

           <Pressable
                style={styles.button}
                onPress={() => console.log('Recuperar Senha')}
           >
                <Text style={styles.buttonText}>Recuperar Senha</Text>
           </Pressable>

           <Pressable style={styles.forgotRegister} onPress={handleGoToLogin}>
                <Text style={styles.forgotRegisterText}>
                    Não vai recuperar?
                    <Text style={styles.textLink} > Voltar ao Login</Text>
                </Text>
            </Pressable>
        </View>
    )
}
