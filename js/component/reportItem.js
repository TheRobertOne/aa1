/**
 * Created by 万叙杰 on 2017/12/4.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const classPng = require('../../images/class.png');
const classHome = require('../../images/class-home.png');
const homework = require('../../images/homework.png');

export default class ReportItem extends Component {

    render () {
        const picture = this.props.item.type === 1 ? classPng : this.props.item.type === 2 ? classHome : homework;
        return (
            <TouchableOpacity onPress={() => {
                const { navigate } = this.props.navigation;
                navigate('ReportDetail');
            }}>
                <View style={styles.container}>
                    <View style={styles.contentArea}>
                        <Image source={picture} style={styles.image} />
                        <View style={styles.contentArea2}>
                            <View style={styles.selfInfo}>
                                <Text style={styles.name}>{this.props.item.name}</Text>
                                <Text style={styles.name1}>{this.props.item.data}</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>学情报告</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.contentRight}>
                        <Text style={styles.dirIcon}>{'>'}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    image: {
        width: 60,
        height: 60,
    },
    contentArea: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    contentArea2: {
        marginLeft: 20,
        justifyContent: 'center'
    },
    selfInfo: {
        flexDirection: 'row'
    },
    name: {
        fontSize: 14,
        color: '#333',
    },
    name1: {
        fontSize: 14,
        color: '#333',
        marginLeft: 10,
    },
     title: {
        fontSize: 14,
         color: '#999',
     },
    contentRight: {
        justifyContent: 'center',
        marginRight: 10,
    },
    dirIcon: {
        fontSize: 14
    }
})