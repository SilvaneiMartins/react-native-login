import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 108,
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 66,
        height: 72,
        borderRadius: 18,
        backgroundColor: '#25CE09',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleLogo: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    title: {
        fontSize: 16,
        marginTop: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        marginTop: 16,
        color: '#828282',
        fontWeight: 'normal',
    },
    content: {
        width: '100%',
        padding: 10,
        borderWidth: 2,
        borderColor: '#7CB1FF',
        marginTop: 30,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentPassword: {
        padding: 10,
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: '#7CB1FF',
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        height: 35,
        marginLeft: 5,
        color: '#828282',
        fontSize: 14,
    },
    button: {
        height: 50,
        width: '100%',
        marginTop: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1FA309',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    }
});
