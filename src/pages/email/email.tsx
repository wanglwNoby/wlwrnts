import * as React from 'react';
import { useWindowDimensions, View, Text, Button, Modal } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaskedView from '@react-native-community/masked-view';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-community/picker';

const Drawer = createDrawerNavigator();

const EmailScreen = (): React.ReactElement => {
    const [visible, setVisible] = React.useState(false);
    const [show, setShow] = React.useState(false);
    const [mode, setMode] = React.useState('date');
    const [date, setDate] = React.useState(new Date());
    const [pickerValue, setPickerValue] = React.useState('java');

    const onChange = (_event: any, selectedDate: any): void => {
        const currentDate = selectedDate || date;
        if (mode === 'date') {
            setMode('time');
        } else {
            setShow(false);
            setDate(currentDate);
            setMode('date');
            console.log(currentDate);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="展示时间选择器" onPress={(): void => setShow(true)} />
            <Text>邮件页</Text>
            <Button title="展示modal" onPress={(): void => setVisible(true)} />
            <Picker
                selectedValue={pickerValue}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue: React.ReactText): void => {
                    const value: string = itemValue as string;
                    setPickerValue(value);
                }}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
            {show && (
                <DateTimePicker
                    mode={mode as any}
                    is24Hour={true}
                    display="default"
                    value={date}
                    onChange={onChange}
                />
            )}
            <Modal
                animationType="slide"
                // transparent={false}
                visible={visible}
                presentationStyle="formSheet"
                onShow={(): void => {
                    console.log('打开modal');
                }}
            >
                <View style={{ height: 200, backgroundColor: 'red' }}>
                    <Text>Hello World!</Text>
                    <Button title="关闭modal" onPress={(): void => setVisible(false)} />
                </View>
            </Modal>
        </View>
    );
};

const EmailDrawerScreen = (): React.ReactElement => (
    <MaskedView
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
            <View
                style={{
                    backgroundColor: 'transparent',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: 60,
                        color: 'black',
                        fontWeight: 'bold'
                    }}
                >
                    BasicMaskBasicMask
                </Text>
            </View>
        }
    >
        <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
        <View style={{ flex: 1, height: '100%', backgroundColor: '#e1e1e1' }} />
    </MaskedView>
);

const Email = (): React.ReactElement => {
    const dimensions = useWindowDimensions();
    const isLargeScreen = dimensions.width >= 400;

    return (
        <Drawer.Navigator
            drawerStyle={isLargeScreen ? null : { width: 200 }}
            drawerType={isLargeScreen ? 'permanent' : 'front'}
            edgeWidth={100}
        >
            <Drawer.Screen name="emailHome" component={EmailScreen} />
            <Drawer.Screen name="emailDrawer" component={EmailDrawerScreen} />
        </Drawer.Navigator>
    );
};

export default Email;
