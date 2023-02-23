import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF',
    },
    subtitle: {
        marginBottom: 20,
        fontSize: 12,
        marginTop: 16,
        color: '#828282',
        fontWeight: 'normal',
    },
    contentInputName: {
        padding: 10,
        width: '100%',
        marginTop: 7,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#7CB1FF',
    },
    textInputName: {
        flex: 1,
        height: 35,
        paddingLeft: 5,
        color: '#828282',
        alignItems: 'center',
    },
    buttonCadastro: {
        height: 50,
        width: '100%',
        marginTop: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1FA309',
    },
    textButton: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    forgotRegister: {
        height: 30,
        marginTop: 30,
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
});
