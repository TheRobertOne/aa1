/**
 * Created by 万叙杰 on 2017/12/5.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import Chart from 'react-native-chart';
// require('react-native-chart');
const questionIcon = require('../../../images/questionIcon.png');

const data = [[
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
]];
export default class ClassroomView extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titleContent}>课堂简介</Text>
                    <Image source={questionIcon} style={styles.titleIcon} />
                </View>
                {/*<View style={styles.container2}>*/}
                    {/*<Chart*/}
                        {/*style={styles.chart}*/}
                        {/*data={data}*/}
                        {/*verticalGridStep={5}*/}
                        {/*type="line"*/}
                        {/*showDataPoint={true}*/}
                        {/*color={['#e1cd00']}*/}
                    {/*/>*/}
                {/*</View>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 920,
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
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        width: 200,
        height: 200,
    },
})