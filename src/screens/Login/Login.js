import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';

import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import styles from './styles';

export const Login = () => {
    const [show, setShow] = useState(false);

    const handleVisible = () => {
        setShow(v => !v)
    }

    const handleGoTLogin = () => {
        Alert.alert('Login realizado com sucesso!')
    }

    return (
        <View style={styles.container}>

            <View style={styles.logo} >
                <Text style={styles.titleLogo} >L</Text>
            </View>

            <Text style={styles.title}>Bem Vindo ao Lungo!</Text>

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

            <Pressable style={styles.button} onPress={handleGoTLogin} >
                <Text style={styles.buttonText} >Entrar</Text>
            </Pressable>
        </View>
    )
}
