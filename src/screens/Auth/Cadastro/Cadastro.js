import React, { useState } from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Pressable } from 'react-native';

import { styles } from './styles';
import { HeaderLogo } from '../../../components/HeaderLogo';

export const Cadastro = () => {
    const navigation = useNavigation();

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowPasswordConfirm = () => {
        setShowPasswordConfirm(!showPasswordConfirm);
    };

    const handleGoToLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <HeaderLogo />

            <Text style={styles.subtitle}>
                Registre-se para continuar
            </Text>

            <View style={styles.contentInputName}>
                <AntDesign name="user" size={24} color="lightgray" />
                <TextInput
                    style={styles.textInputName}
                    placeholder='Digite seu nome'
                />
            </View>

            <View style={styles.contentInputName}>
                <AntDesign name="mail" size={24} color="lightgray" />
                <TextInput
                    style={styles.textInputName}
                    placeholder='Digite seu e-mail'
                />
            </View>

            <View style={styles.contentInputName}>
                <AntDesign name="lock" size={24} color="lightgray" />
                <TextInput
                    style={styles.textInputName}
                    placeholder='Digite sua senha'
                    secureTextEntry={!showPassword}
                    type={showPassword ? 'text' : 'password'}
                />
                <Pressable onPress={handleShowPassword}>
                    <MaterialCommunityIcons
                        name={showPassword ? "eye" : "eye-off"}
                        size={24}
                        color="lightgray"
                    />
                </Pressable>
            </View>

            <View style={styles.contentInputName}>
                <AntDesign name="lock" size={24} color="lightgray" />
                <TextInput
                    style={styles.textInputName}
                    placeholder='Repita sua senha'
                    secureTextEntry={!showPasswordConfirm}
                    type={showPasswordConfirm ? 'text' : 'password'}
                />
                <Pressable onPress={handleShowPasswordConfirm}>
                    <MaterialCommunityIcons
                        name={showPasswordConfirm ? "eye" : "eye-off"}
                        size={24}
                        color="lightgray"
                    />
                </Pressable>
            </View>


            <Pressable style={styles.buttonCadastro} >
                <Text style={styles.textButton}>Cadastrar</Text>
            </Pressable>

            <Pressable style={styles.forgotRegister} onPress={handleGoToLogin}>
                <Text style={styles.forgotRegisterText}>
                    Já tenho conta?
                    <Text style={styles.textLink} > Voltar ao Login</Text>
                </Text>
            </Pressable>
        </View>
    )
}
