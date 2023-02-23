import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    subtitle: {
        fontSize: 12,
        marginTop: 16,
        color: '#828282',
        fontWeight: 'normal',
    },
    contentInputEmail: {
        padding: 10,
        width: '100%',
        marginTop: 70,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#7CB1FF',
    },
    textInputEmail: {
        flex: 1,
        height: 30,
        fontSize: 14,
        marginLeft: 5,
        color: '#828282',
    },
    forgotRegister: {
        height: 30,
        marginTop: 20,
        width: '100%',
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    forgotRegisterText: {
        color: '#828282',
    },
    textLink: {
        fontSize: 15,
        color: '#1FA309',
        fontWeight: 'bold',
    },
    button: {
        height: 50,
        width: '100%',
        marginTop: 80,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1FA309',
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold',
    },
});
