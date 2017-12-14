/**
 * Created by 万叙杰 on 2017/12/4.
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import ReportTop from '../component/reportTop';
import ReportItem from '../component/reportItem';

import {mock} from '../../mock.js';

export default class Report extends Component {
    constructor (props) {
        super (props);
        this.state = {
            mock
        }
    }
    render () {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ReportTop />
                    <FlatList
                        data={this.state.mock}
                        renderItem={({item}) => <ReportItem item={item} navigation={this.props.navigation} />}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor: '#F7F7F7',
    }
})