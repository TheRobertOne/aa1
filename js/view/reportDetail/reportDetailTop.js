/**
 * Created by 万叙杰 on 2017/12/5.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const student = require('../../../images/student.png');
const good = require('../../../images/good.png');
const bad = require('../../../images/bad.png');
const crown = require('../../../images/crown.png');

export default class ReportDetailTop extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.container2}>
                    <Image source={student} style={styles.image} />
                    <Text style={styles.name}>张国荣</Text>
                    <Text style={styles.info}>三年级二班/2017-08-08</Text>
                </View>
                <View style={styles.studyInfo}>
                    <View style={styles.goodArea}>
                        <Image source={good} style={styles.goodIcon} />
                        <Text style={styles.actionContent}>表扬3次</Text>
                    </View>
                    <View style={styles.badArea}>
                        <Image source={bad} style={styles.badIcon} />
                        <Text style={styles.actionContent}>批评4次</Text>
                    </View>
                    <View style={styles.crownArea}>
                        <Image source={crown} style={styles.crownIcon} />
                        <Text style={styles.actionContent}>最佳2次</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 300,
        justifyContent: 'center',
        marginBottom: 20,
    },
    container2: {
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 100,
    },
    name: {
        fontSize: 14,
        color: '#000',
    },
    info: {
        fontSize: 14,
        color: '#999',
    },
    studyInfo: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20
    },
    actionContent: {
        fontSize: 14,
        color: '#666',
    },
    goodArea: {
        alignItems: 'center'
    },
    badArea: {
        alignItems: 'center',
    },
    crownArea: {
        alignItems: 'center',
    },
})