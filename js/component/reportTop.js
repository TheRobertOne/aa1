/**
 * Created by 万叙杰 on 2017/12/4.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ReportTop extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.containerItem}>
                    <Text style={styles.num}>8,000</Text>
                    <Text style={styles.content}>上课次数</Text>
                </View>
                <Text style={styles.line} />
                <View style={styles.containerItem}>
                    <Text style={styles.num}>8,000</Text>
                    <Text style={styles.content}>上课次数</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 150,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 8,
        justifyContent: 'space-around',
        alignItems: 'center',
        elevation: 20,
    },
    containerItem: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    line: {
        width: 1,
        height: 80,
        backgroundColor: '#ccc',
    },
    num: {
        fontSize: 24,
        color: '#333',
        marginBottom: 5,
    },
    content: {
        fontSize: 22,
        color: '#999',
        marginTop: 5,
    },
})