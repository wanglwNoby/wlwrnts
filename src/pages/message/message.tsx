import * as React from 'react';
import { FlatList, View, Text, TouchableHighlight, TextInput } from 'react-native';
import styles from './styles';

interface IState {
    refreshing: boolean;
    textValue: string;
    listDate: any;
}

class Message extends React.PureComponent<any, IState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            refreshing: false,
            textValue: '',
            listDate: [
                { id: '1', name: '111' },
                { id: '2', name: '222' },
                { id: '3', name: '333' },
                { id: '4', name: '444' },
                { id: '5', name: '555' },
                { id: '6', name: '666' }
            ]
        };
    }

    public onPress = (id: string): void => {
        console.log(id);
    };

    public onLongPress = (id: string): void => {
        console.log('onLongPress', id);
    };

    public onRefresh = (): void => {
        this.setState({
            refreshing: true
        });
        setTimeout(() => {
            this.setState({
                refreshing: false
            });
        }, 1000);
    };

    public endReached = (info: { distanceFromEnd: number }): void => {
        console.log(info);
    };

    public render(): React.ReactElement {
        const renderItem = ({ item }: any): React.ReactElement => {
            return (
                <TouchableHighlight
                    delayPressIn={50}
                    underlayColor="#ddd"
                    onPress={this.onPress.bind(this, item.id)}
                    onLongPress={this.onLongPress.bind(this, item.id)}
                >
                    <View style={styles.list}>
                        <Text>{item.name}</Text>
                    </View>
                </TouchableHighlight>
            );
        };

        const renderListHeader = (): React.ReactElement => {
            return (
                <View style={styles.list}>
                    <Text>header</Text>
                </View>
            );
        };

        return (
            <View style={styles.messageContainer}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(text: string): void => this.setState({ textValue: text })}
                        value={this.state.textValue}
                    />
                    <View style={styles.cancel}>
                        <Text style={styles.cancelText}>取消</Text>
                    </View>
                </View>
                <FlatList
                    style={styles.listContainer}
                    data={this.state.listDate}
                    extraData={this.state}
                    keyExtractor={(item: any): string => item.id}
                    ListHeaderComponent={renderListHeader}
                    renderItem={renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    onEndReachedThreshold={0.2}
                    onEndReached={this.endReached}
                />
            </View>
        );
    }
}

export default Message;
