import * as React from 'react';
import { View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { WebView } from 'react-native-webview';

const Business = (): React.ReactElement => {
    return (
        <ViewPager style={{ flex: 1 }} initialPage={0}>
            <View key="1">
                <Text>First page业务页</Text>
            </View>
            <View key="2">
                <WebView source={{ uri: 'https://www.baidu.com/' }} />
            </View>
        </ViewPager>
    );
};

export default Business;
