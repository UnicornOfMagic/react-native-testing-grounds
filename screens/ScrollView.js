import {ScrollView, Text} from "react-native";
import React, {Component} from "react";

export default class ScrollViewTester extends Component<Props> {
    static navigationOptions = {
        title: 'Scroll View Demo'
    };
    render() {
        return(
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Text style={{fontSize:96}}>If you like</Text>
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Text style={{fontSize:96}}>What's the best</Text>
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        )
    }
}