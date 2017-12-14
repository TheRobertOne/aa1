/**
 * Created by 万叙杰 on 2017/12/5.
 */
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ReportDetailTop from './reportDetailTop.js';
import ClassroomInfo from './classroomInfo.js';
import ClassroomRecord from './classroomRecord.js';
import ClassroomView from './classroomView.js';

export default class ReportDetail extends Component {

    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'学习情况',
        headerRight:(
            <Text style={{color:'red',marginRight:20}} onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>报告</Text>
        ),
        // 设置滑动返回的距离
        gestureResponseDistance:{horizontal:300},

    });

    render () {
        return (
            <ScrollView>
                <ReportDetailTop props={this.props} />
                <ClassroomInfo />
                <ClassroomRecord />
                <ClassroomView />
            </ScrollView>
        )
    }
}