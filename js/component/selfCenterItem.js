/**
 * Created by 万叙杰 on 2017/12/5.
 */
import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class SelfCenterItem extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <View style={styles.contentArea}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.content}>{this.props.content}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        // marginLeft: 10,
        // marginRight: 10,
        height: 60,
        paddingLeft: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
    },
    contentArea: {
        // justifyContent: 'center',
        marginLeft: 20,
    },
    title: {
        color: '#333',
        fontSize: 12,
    },
    content: {
        color: '#999',
        fontSize: 12,
    }
})