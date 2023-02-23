import React, { useState } from 'react'
import {
    View,
    Text,
    Alert,
    Image,
    Pressable,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import styles from './styles';
import { HeaderLogo } from '../../../components/HeaderLogo';
import LogoGoogle from '../../../assets/logo_google.png';

export const Login = () => {
    const navigation = useNavigation();
    const [show, setShow] = useState(false);

    const handleVisible = () => {
        setShow(v => !v)
    }

    const handleGoToLogin = () => {
        Alert.alert('Login com e-mail e senha!')
    }

    const handleGoToLoginGoogle = () => {
        Alert.alert('Login realizado com Google!')
    }

    const handleGoToForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }

    const handleGoToForgotRegister = () => {
        navigation.navigate('Cadastro');
    }

    return (
        <SafeAreaView style={styles.container}>

            <HeaderLogo />

            <Text style={styles.subtitle}>
                Continuar com Login
            </Text>

            <View style={styles.content} >
                <MaterialCommunityIcons
                    name="email-outline"
                    size={24}
                    color="lightgray"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Endereço de e-mail'
                />
            </View>


            <View style={styles.contentPassword} >
                <SimpleLineIcons
                    name="lock"
                    size={24}
                    color="lightgray"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Sua senha'
                    secureTextEntry={!show}
                    type={show ? 'text' : 'password'}
                />
                <TouchableOpacity onPress={handleVisible} >
                    {show ? (
                        <MaterialCommunityIcons
                            name='eye'
                            size={24}
                            color="lightgray"
                        />
                    ) : (
                        <MaterialCommunityIcons
                            name='eye-off'
                            size={24}
                            color="lightgray"
                        />
                    )}
                </TouchableOpacity>
            </View>

            <Pressable style={styles.forgotPassword} onPress={handleGoToForgotPassword} >
                <Text style={styles.forgotPassworText}>
                    Esqueceu sua senha?
                    <Text style={styles.textLink} > Clique aqui</Text>
                </Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleGoToLogin} >
                <Text style={styles.buttonText} >Entrar</Text>
            </Pressable>

            <Pressable style={styles.buttonSocial} onPress={handleGoToLoginGoogle} >
                <Image
                    source={LogoGoogle}
                    style={styles.imageGoogle}
                />
                <Text style={styles.buttonSocialText} >Login com o Google</Text>
            </Pressable>

            <Pressable style={styles.forgotRegister} onPress={handleGoToForgotRegister} >
                <Text style={styles.forgotRegisterText}>
                    Não tem cadastro?
                    <Text style={styles.textLink} > Clique aqui</Text>
                </Text>
            </Pressable>

        </SafeAreaView>
    )
}
