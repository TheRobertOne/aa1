/**
 * Created by 万叙杰 on 2017/12/4.
 */
import React from 'react';
import {Image, StyleSheet, Text, AsyncStorage} from 'react-native';
import {StackNavigator, TabNavigator, addNavigationHelpers} from 'react-navigation';

import Report from './js/view/report.js';
import SelfCenter from './js/view/selfCenter.js';
import ReportDetail from './js/view/reportDetail/reportDetail.js';

const renwutouxiang = require('./images/renwutouxiang.png');
const bingtu = require('./images/bingtu.png');

const Index = TabNavigator({
    Report: {
        screen: Report,
        navigationOptions:({navigation, screenProps}) => ({
            // headerTitle: '学情报告',
            // headerStyle: {
            //     backgroundColor: '#846511'
            // },
            header: null,
            /*headerTitleStyle: {
                fontSize: 12,
                color: 'white'
            },*/
            gesturesEnabled: true,
            tabBarVisible: true,
            tabBarIcon: (({tintColor}) => {
                return (
                    <Image
                        source={bingtu}
                        style={[{height: 25, width: 25}, {tintColor: tintColor}]}
                    />
                )
            }),
            tabBarLabel: '学情报告'
        })
    },
    selfCenter: {
        screen: SelfCenter,
        navigationOptions: () => TabOptions('个人中心', renwutouxiang, renwutouxiang, '个人中心')
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    initialRouteName: '',
    backBehavior: 'none',
    tabBarOptions: {
        activeTintColor: '#00a0e8',
        inactiveTintColor: '#666',
        showLabel: true,
        showIcon: true,
        upperCaseLabel: false,
        style: {backgroundColor: '#f9f9f9'},
        tabStyle: {borderRadius: 20},
        iconStyle: {borderRadius: 20},
    }
});

export default MyApp = StackNavigator({
    Index: {
        screen: Index,
    },
    ReportDetail: {
        screen: ReportDetail
    }
}, {

});

const TabOptions = (tabBarTitle, normalImage, selectedImage, navTitle) => {
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor, focused}) => {
        return (
            <Image
                source={!focused ? normalImage : selectedImage}
                style={[{height: 25, width: 25}, {tintColor: tintColor}]}
            />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize: 16, color: 'white', alignSelf: 'center'};
    const headerStyle = {backgroundColor: '#4ecbfc'};
    const tabBarVisible = true;
    const header = null
    return {tabBarLabel, tabBarIcon, headerTitle, headerTitleStyle, headerStyle, tabBarVisible, header};
}