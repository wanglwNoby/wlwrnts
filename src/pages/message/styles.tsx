import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    searchContainer: {
        height: 40,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5
    },
    textInput: {
        flex: 1,
        paddingLeft: 6,
        paddingRight: 10
    },
    cancel: {
        width: 60,
        justifyContent: 'center'
    },
    cancelText: {
        textAlign: 'center',
        borderLeftWidth: 0.5,
        borderLeftColor: '#ccc'
    },

    listContainer: {
        flex: 1
    },
    list: {
        height: 120
    }
});

export default styles;
