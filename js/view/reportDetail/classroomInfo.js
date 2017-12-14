/**
 * Created by 万叙杰 on 2017/12/5.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const questionIcon = require('../../../images/questionIcon.png');

export default class ClassroomInfo extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleContent}>课堂简介</Text>
                    <Image source={questionIcon} style={styles.titleIcon} />
                </View>
                <View>
                    <Text style={styles.content}>
                        张国荣同学今天参与了4节智慧课堂，课堂中听课不够专注哦！习题正确率很高，其中表现最好的一堂课是：英语课
                    </Text>
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
        flexDirection: 'row'
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
    content: {
        fontSize: 14,
        color: '#666',
        marginTop: 20,
    }
})