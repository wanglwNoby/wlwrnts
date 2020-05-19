import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        borderTopColor: '#ccc',
        borderTopWidth: 0.2
    },
    touchableOpacity: {
        flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ededed'
    },
    text: {
        fontSize: 11,
        marginTop: 6
    }
});

export default styles;
