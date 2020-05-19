import * as React from 'react';
import { connect } from 'react-redux';
import {
    View,
    Text,
    Button,
    ToastAndroid,
    Vibration,
    PermissionsAndroid,
    Platform
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AppContext from '/AppContext';

const Toast = (props: any): null => {
    if (props.visible) {
        const toastAndroid: any = ToastAndroid;
        toastAndroid.showWithGravityAndOffset(
            props.message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
        return null;
    }
    return null;
};

interface IProps {
    kdgTab: string;
}

const Knowledge = (props: IProps): React.ReactElement => {
    const { setLogin } = React.useContext(AppContext);

    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        console.log(Platform.Version);
    }, []);

    const logout = (): void => {
        AsyncStorage.removeItem('userToken');
        setLogin(false);
    };

    const handleShowToast = (): void => {
        setShow(true);
        Vibration.vibrate(1000);
        setTimeout(() => setShow(false), 2000);
    };

    async function requestCameraPermission(): Promise<void> {
        // try {
        //     const granted = await PermissionsAndroid.request(
        //         PermissionsAndroid.PERMISSIONS.variable,
        //         {
        //             title: '申请振动权限',
        //             message: '一个很牛逼的应用振动',
        //             buttonNeutral: '等会再问我',
        //             buttonNegative: '不行',
        //             buttonPositive: '好吧'
        //         }
        //     );
        //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //         console.log('现在你获得振动权限了');
        //         Vibration.vibrate(1000);
        //     } else {
        //         console.log('用户并不屌你');
        //     }
        // } catch (err) {
        //     console.warn(err);
        // }
    }

    return props.kdgTab === 'recommend' ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>推荐页</Text>
            <Button title="showtoast" onPress={handleShowToast} />
            <Button title="振动权限" onPress={requestCameraPermission} />
            <Button title="退出登录" onPress={logout} />
            <Toast visible={show} message="这是toast提示" />
        </View>
    ) : (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>订阅页</Text>
            <Button title="退出登录" onPress={logout} />
        </View>
    );
};

const mapStateToProps = (state: any): any => ({
    kdgTab: state.kdgTabReducer.kdgTab
});

export default connect(mapStateToProps, null)(Knowledge);
