import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import setKdgTab from '../../reduxs/actions/kdgTabAction';
import styles from './styles';

interface IProps {
    kdgTab: string;
    setKdgTab: (kdgTab: string) => void;
    [propName: string]: any;
}

const Header = (headerProps: IProps): React.ReactElement => {
    // console.log('headerProps:', headerProps);
    if (headerProps.scene.route.name === 'Sign') {
        return <View />;
    }

    const renderDropdown = (routename: string): any => {
        console.log(routename);
    };

    const renderHeaderRight = (): React.ReactElement => {
        const index: number = headerProps.scene.route.state
            ? headerProps.scene.route.state.index
            : 0;
        const routeName = headerProps.scene.route.state
            ? headerProps.scene.route.state.routeNames[index]
            : 'Message';
        switch (routeName) {
            case 'Message':
                return (
                    <>
                        <Icon
                            name="plus"
                            size={20}
                            color="#fff"
                            onPress={(): void => renderDropdown(routeName)}
                        />
                        <Icon
                            name="phone"
                            size={20}
                            color="#fff"
                            onPress={(): void => headerProps.navigation.navigate('Calls')}
                        />
                    </>
                );
            case 'Email':
                return <Text />;
            case 'AddressBook':
            case 'Business':
            case 'Knowledge':
                return (
                    <Icon
                        name="plus"
                        size={20}
                        color="#fff"
                        onPress={(): void => renderDropdown(routeName)}
                    />
                );
            default:
                return <Text />;
        }
    };

    const renderTitle = (): string | React.ReactElement => {
        const index: number = headerProps.scene.route.state
            ? headerProps.scene.route.state.index
            : 0;
        const routeName = headerProps.scene.route.state
            ? headerProps.scene.route.state.routeNames[index]
            : 'Message';
        switch (routeName) {
            case 'Message':
                return '消息';
            case 'Email':
                return '邮件';
            case 'AddressBook':
                return '通讯录';
            case 'Business':
                return '业务';
            case 'Knowledge':
                return (
                    <>
                        <Text
                            style={{
                                color: headerProps.kdgTab === 'recommend' ? '#fff' : '#ccc'
                            }}
                            onPress={(): void => headerProps.setKdgTab('recommend')}
                        >
                            推荐
                        </Text>
                        <Text>&nbsp;&nbsp;</Text>
                        <Text
                            style={{
                                color: headerProps.kdgTab === 'recommend' ? '#ccc' : '#fff'
                            }}
                            onPress={(): void => headerProps.setKdgTab('subscribe')}
                        >
                            订阅
                        </Text>
                    </>
                );
            default:
                return '消息';
        }
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
                {headerProps.previous ? (
                    <Icon
                        name="left"
                        size={24}
                        color="#fff"
                        onPress={(): void => headerProps.navigation.goBack()}
                    />
                ) : (
                    <Text
                        style={styles.circleText}
                        onPress={(): void => headerProps.navigation.navigate('UserCenter')}
                    >
                        用户
                    </Text>
                )}
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {headerProps.scene.route.name === 'Home'
                        ? renderTitle()
                        : headerProps.scene.route.name === 'UserCenter'
                        ? '个人中心'
                        : headerProps.scene.route.name === 'Calls'
                        ? '通话'
                        : ''}
                </Text>
            </View>
            <View style={styles.rightContainer}>
                {headerProps.scene.route.name === 'Home' && renderHeaderRight()}
            </View>
        </View>
    );
};

const mapStateToProps = (state: any): any => ({
    kdgTab: state.kdgTabReducer.kdgTab
});

const mapDispatchToProps = (dispatch: any): any => ({
    setKdgTab: (kdgTab: string): void => dispatch(setKdgTab(kdgTab))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
