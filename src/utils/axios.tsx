import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import qs from 'qs';

// 根据后台返回的错误状态码，进行处理
const errorHandle = (status: number): void => {
    switch (status) {
        case 500:
            Alert.alert('Internal Server Error');
            break;
        // 用户过期
        case 503:
            // window.location.href = '/login'
            break;
        // 用户未登录
        case 505:
            // window.location.href = '/login'
            break;
        default:
            break;
    }
};

// 创建axios实例
const instance = axios.create();
// 默认路径
instance.defaults.baseURL = 'http://172.16.13.112:8011';
// 请求时间
instance.defaults.timeout = 30000;
// 跨域请求时使用凭证
// instance.defaults.withCredentials = true
// 默认是ajax请求
instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求拦截器
instance.interceptors.request.use(
    (config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
        // 在发送请求之前做些什么
        AsyncStorage.getItem('userToken', (error, result) => {
            if (!error && result) {
                config.headers['Login-Token'] = JSON.parse(result).user_token;
                config.headers['Session-ID'] = JSON.parse(result).session_id;
            } else {
                config.headers['Login-Token'] = '';
                config.headers['Session-ID'] = '';
            }
        });
        if (config.method === 'post' && !config.headers['Content-Type']) {
            config.data = qs.stringify(config.data);
        }
        console.log(config);
        return config;
    },
    (error: any): Promise<never> => Promise.reject(error)
);
// 响应拦截器(过滤数据，只返回 data 部分)
instance.interceptors.response.use(
    (response: AxiosResponse<any>): AxiosResponse<any> | Promise<AxiosResponse<any>> => {
        if (response.status === 200 && response.data.result === false) {
            Alert.alert(response.data.msg);
            errorHandle(response.data.code);
        }
        return response.data;
    },
    (error: any): Promise<never> => {
        console.log(error);
        const { response } = error;
        if (response) {
            errorHandle(response.status);
        } else {
            Alert.alert('服务器连接已断开或网络延迟过高!');
        }
        return Promise.reject(response);
    }
);

export default instance;
