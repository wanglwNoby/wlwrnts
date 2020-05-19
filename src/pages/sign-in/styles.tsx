import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001529'
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 40,
        width: 40,
        marginRight: 8
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: '',
        color: 'white'
    },
    loginContainer: {
        width: '100%',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10
    },
    formContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    text: {
        lineHeight: 36,
        color: 'white'
    },
    input: {
        height: 36,
        width: 200,
        borderRadius: 12,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#44515F',
        color: 'white',
        paddingLeft: 8
    },
    button: {
        width: 120,
        height: 32,
        lineHeight: 32,
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: '#1890FF',
        borderRadius: 20,
        color: 'white',
        letterSpacing: 12
    }
});

export default styles;
