/**
 * Created by 万叙杰 on 2017/12/5.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const questionIcon = require('../../../images/questionIcon.png');

export default class ClassroomRecord extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleContent}>课堂简介</Text>
                    <Image source={questionIcon} style={styles.titleIcon} />
                </View>
                <View style={styles.contentArea}>
                    <View style={styles.contentItem}>
                        <Text style={styles.num}>10/20</Text>
                        <Text style={styles.content}>举手/提问</Text>
                    </View>
                    <View style={styles.contentItem}>
                        <Text style={styles.num}>66次</Text>
                        <Text style={styles.content}>回答问题</Text>
                    </View>
                    <View style={styles.contentItem}>
                        <Text style={styles.num}>66次</Text>
                        <Text style={styles.content}>主动反馈</Text>
                    </View>
                    <View style={styles.contentItem}>
                        <Text style={styles.num}>10/20</Text>
                        <Text style={styles.content}>完成习题</Text>
                    </View>
                    <View style={styles.contentItem}>
                        <Text style={styles.num}>10/20</Text>
                        <Text style={styles.content}>正确/错误</Text>
                    </View>
                    <View style={styles.contentItem}>
                        <Text style={styles.num}>99分</Text>
                        <Text style={styles.content}>自评分数</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 160,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 8,
        padding: 20,
    },
    title: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    titleContent: {
        fontSize: 16,
        color: '#333',
    },
    titleIcon: {
        width: 20,
        height: 20,
        // marginTop: 10,
        marginLeft: 10,
    },
    contentArea: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap : 'wrap',
        // flex: 3
    },
    contentItem: {
        // flex: 1
        width: 100,
        alignItems: 'center'
    },
    num: {
        fontSize: 16,
        color: '#00a0e8',
    },
    content: {
        fontSize: 14,
        color: '#666',
    }
})