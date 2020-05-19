import * as React from 'react';
import { View, Text, Switch, TouchableNativeFeedback, Button, Share } from 'react-native';
import Slider from '@react-native-community/slider';
// import ImagePicker from 'react-native-image-crop-picker';

const AddressBook = (): React.ReactElement => {
    const handleGetPhotos = (): void => {
        // ImagePicker.openPicker({
        //     multiple: true
        // }).then((images) => {
        //     console.log(images);
        // });
    };

    const onShare = async (): Promise<void> => {
        try {
            const result = await Share.share({
                message: 'React Native | A framework for building native apps using React'
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <TouchableNativeFeedback
            onPress={(): void => console.log('1111111111')}
            background={TouchableNativeFeedback.SelectableBackground()}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>通讯录页</Text>
                <Button title="share" onPress={onShare} />
                <Button title="打开相册" onPress={handleGetPhotos} />
                <Switch />
                <Slider
                    style={{ width: 200, height: 40 }}
                    minimumValue={0.5}
                    maximumValue={10}
                    step={1}
                    minimumTrackTintColor="#ffffff"
                    maximumTrackTintColor="#000000"
                />
            </View>
        </TouchableNativeFeedback>
    );
};

export default AddressBook;
