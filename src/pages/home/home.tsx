import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabBar from '@components/bottom-tab-bar/bottomTabBar';

const Message = React.lazy(() => import('../message/message'));
const Email = React.lazy(() => import('../email/email'));
const AddressBook = React.lazy(() => import('../address-book/addressBook'));
const Business = React.lazy(() => import('../business/business'));
const Knowledge = React.lazy(() => import('../knowledge/knowledge'));

const Tab = createBottomTabNavigator();

const Home = (): React.ReactElement => {
    return (
        <React.Suspense
            fallback={
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            }
        >
            <Tab.Navigator tabBar={(props): React.ReactElement => <BottomTabBar {...props} />}>
                <Tab.Screen name="Message" component={Message} options={{ title: '消息' }} />
                <Tab.Screen name="Email" component={Email} options={{ title: '邮件' }} />
                <Tab.Screen
                    name="AddressBook"
                    component={AddressBook}
                    options={{ title: '通讯录' }}
                />
                <Tab.Screen name="Business" component={Business} options={{ title: '业务' }} />
                <Tab.Screen name="Knowledge" component={Knowledge} options={{ title: '知识' }} />
            </Tab.Navigator>
        </React.Suspense>
    );
};

export default Home;
