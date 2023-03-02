import React, {
    useEffect,
} from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable
                    style={{
                        marginLeft: 10,
                    }}
                    onPress={() => console.log('Clicou no botão de perfil!')}
                >
                    <Ionicons
                        name='person-circle-outline'
                        size={25}
                    />
                </Pressable>
            ),
            headerRight: () => (
                <Pressable
                    style={{
                        marginRight: 10,
                    }}
                    onPress={() => console.log('Clicou no botão de pesquisar!')}
                >
                    <Ionicons
                        name='search-outline'
                        size={22}
                    />
                </Pressable>
            )
        });
    }, []);

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
            }}
        >
            <Text style={{ fontSize: 30 }} >Home</Text>
        </View>
    )
}
