/**
 * Created by 万叙杰 on 2017/12/4.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import SelfCenterItem from '../component/selfCenterItem';

const student = require('../../images/student.png');
const setting = require('../../images/setting.png');
const feedback = require('../../images/feedback.png');
const helpCenter = require('../../images/help-center.png');
const aboutUs = require('../../images/aboutUs.png');
const quit = require('../../images/quit.png');

export default class SelfCenter extends Component {
    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.centerTop}>
                        <Image source={student} style={styles.centerTopimage} />
                        <Text style={styles.centerTopTitle}>您好，万叙杰家长</Text>
                        <Text style={styles.centerTopContent}>13670184792</Text>
                    </View>
                    <View>
                        <SelfCenterItem image={setting} title='账号设置' content='修改您的登录密码及基本信息' />
                        <SelfCenterItem image={feedback} title='意见反馈' content='我们关注您提交的任何意见' />
                        <SelfCenterItem image={helpCenter} title='帮助中心' content='了解数据指标和常见问题' />
                        <SelfCenterItem image={aboutUs} title='关于我们' content='采集科技有限公司' />
                        <SelfCenterItem image={quit} title='退出登录' content='确定要退出？' />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
    },
    centerTop: {
        height: 267,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    centerTopimage: {
        height: 150,
        width: 150,
    },
    centerTopTitle: {
        fontSize: 16,
        color: '#333',
        marginTop: 30,
    },
    centerTopContent: {
        fontSize: 14,
        color: '#999',
        marginTop: 10,
    }
})