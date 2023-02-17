import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../screens/Auth/Login';
import { Cadastro } from '../screens/Auth/Cadastro';
import { ForgotPassword } from '../screens/Auth/ForgotPassword';

const Stack = createNativeStackNavigator();

export const AuthRoutes = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
            />
        </Stack.Navigator>
    )
}
