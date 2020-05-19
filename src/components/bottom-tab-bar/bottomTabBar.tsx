import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const BottomTabBar = (tabBarProps: any): React.ReactElement => {
    // console.log('tabBarProps:', tabBarProps)
    const getIconName = (name: string): string => {
        switch (name) {
            case 'Message':
                return 'message1';
            case 'Email':
                return 'mail';
            case 'AddressBook':
                return 'contacts';
            case 'Business':
                return 'appstore1';
            case 'Knowledge':
                return 'book';
            default:
                return name;
        }
    };

    return (
        <View style={styles.tabBarContainer}>
            {tabBarProps.state.routes.map(
                (route: any, index: number): React.ReactElement => {
                    const isFocused = tabBarProps.state.index === index;

                    const onPress = (): void => {
                        const event = tabBarProps.navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });
                        if (!isFocused && !event.defaultPrevented) {
                            tabBarProps.navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = (): void => {
                        tabBarProps.navigation.emit({
                            type: 'tabLongPress',
                            target: route.key
                        });
                    };

                    return (
                        <TouchableHighlight
                            key={route.key}
                            accessibilityRole="button"
                            style={styles.touchableOpacity}
                            underlayColor="#ddd"
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            <>
                                <Icon
                                    name={getIconName(route.name)}
                                    size={20}
                                    color={isFocused ? '#1890ff' : '#666'}
                                />
                                <Text
                                    style={[styles.text, { color: isFocused ? '#1890ff' : '#666' }]}
                                >
                                    {tabBarProps.descriptors[route.key].options.title}
                                </Text>
                            </>
                        </TouchableHighlight>
                    );
                }
            )}
        </View>
    );
};

export default BottomTabBar;
