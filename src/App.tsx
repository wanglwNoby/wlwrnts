import 'react-native-gesture-handler';
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppState, AppStateStatus } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import reducerIndex from './reduxs/index';
import AppContext from '/AppContext';

import Home from '/pages/home/home';
import SignIn from '/pages/sign-in/signIn';
import UserCenter from '/pages/user-center/userCenter';
import Calls from '/pages/calls/calls';
import Header from '@components/header/header';

const store = createStore(reducerIndex);
const Stack = createStackNavigator();

const App = (): React.ReactElement => {
    const reducer = (prevState: any, action: any): any => {
        switch (action.type) {
            case 'SET_LOGIN':
                return { ...prevState, userToken: action.userToken };
            default:
                return { ...prevState };
        }
    };

    const [appState, dispatch] = React.useReducer(reducer, { userToken: false });

    React.useEffect(() => {
        AsyncStorage.getItem('userToken', (error, result) => {
            if (!error && result) {
                console.log(JSON.parse(result));
                dispatch({ type: 'SET_LOGIN', userToken: true });
            }
        });
    }, []);

    React.useEffect(() => {
        AppState.addEventListener('change', handleAppStateChange);
        return (): void => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    });

    const handleAppStateChange = (nextAppState: AppStateStatus): void => {
        console.log(nextAppState);
    };

    const appContext = React.useMemo(
        () => ({
            setLogin: (data: any): void => {
                dispatch({ type: 'SET_LOGIN', userToken: data });
            }
        }),
        []
    );

    return (
        <Provider store={store}>
            <AppContext.Provider value={appContext}>
                <NavigationContainer theme={appState.theme === 'dark' ? DarkTheme : DefaultTheme}>
                    <Stack.Navigator
                        screenOptions={{
                            header: (props: any): React.ReactElement => <Header {...props} />
                        }}
                    >
                        {!appState.userToken ? (
                            <Stack.Screen
                                name="Sign"
                                component={SignIn}
                                options={{ title: 'login' }}
                            />
                        ) : (
                            <>
                                <Stack.Screen
                                    name="Home"
                                    component={Home}
                                    options={{ title: '首页' }}
                                />
                                <Stack.Screen
                                    name="UserCenter"
                                    component={UserCenter}
                                    options={{ title: '个人中心' }}
                                />
                                <Stack.Screen
                                    name="Calls"
                                    component={Calls}
                                    options={{ title: '通话' }}
                                />
                            </>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            </AppContext.Provider>
        </Provider>
    );
};

export default App;
