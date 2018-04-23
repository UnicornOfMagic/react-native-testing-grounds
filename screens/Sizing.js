import React from "react";
import { Component } from 'react'
import {View} from "react-native";

export default class Sizing extends Component<Props> {
    static navigationOptions = {
        title: 'Sizing Demo'
    };
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{flex: 1}}>
                    <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}} />
                    <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} />
                    <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}} />
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{height: 50, width: 50, backgroundColor: 'powderblue'}} />
                    <View style={{height: 50, width: 50, backgroundColor: 'skyblue'}} />
                    <View style={{height: 50, width: 50, backgroundColor: 'steelblue'}} />
                </View>
            </View>
        )
    }
}