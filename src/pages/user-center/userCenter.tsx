import * as React from 'react';
import { View, Text } from 'react-native';

const UserCenter = (): React.ReactElement => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>个人中心</Text>
        </View>
    );
};

export default UserCenter;
