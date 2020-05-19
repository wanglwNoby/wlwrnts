/* eslint-disable @typescript-eslint/no-require-imports */
import * as React from 'react';
import { Buffer } from 'buffer';
import { View, Text, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AppContext from '/AppContext';
import { _login } from '/apis/global';
import styles from './styles';

const SignIn = (): React.ReactElement => {
    const { setLogin } = React.useContext(AppContext);

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    const login = async (): Promise<void> => {
        const res: any = await _login({
            account: userName,
            password: Buffer.from(password).toString('base64')
        });
        if (res?.result) {
            AsyncStorage.setItem('userToken', JSON.stringify(res.data));
            setLogin(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                <Text style={styles.title}>eMP Public Management Center</Text>
            </View>
            <View style={styles.loginContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.text}>账号：</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入账号"
                        onChangeText={(text): any => setUserName(text)}
                        defaultValue={userName}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.text}>密码：</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="请输入密码"
                        onChangeText={(text): any => setPassword(text)}
                        defaultValue={password}
                    />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.button} onPress={login}>
                        登录
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default SignIn;
