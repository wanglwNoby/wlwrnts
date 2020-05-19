import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#001529',
        paddingRight: 8,
        paddingLeft: 8
    },

    leftContainer: {
        width: 50
    },
    circleText: {
        backgroundColor: '#a8aaea',
        color: '#fff',
        textAlign: 'center',
        width: 32,
        height: 32,
        borderRadius: 32,
        lineHeight: 30,
        fontSize: 12
    },

    titleContainer: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        color: 'white'
    },

    rightContainer: {
        width: 50,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    }
});

export default styles;
