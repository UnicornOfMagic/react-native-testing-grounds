import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#229',
        marginBottom: 50,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginBottom: 10
    }
});

type Props = { navigation: {navigate: (screen: string, options: any) => void} };

export default class Home extends Component<Props> {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1}}/>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        Choose the demo below
                    </Text>
                </View>
                <View style={{flex: 2, justifyContent: 'space-between'}}>
                    <Button
                        title='Font'
                        onPress={() => this.props.navigation.navigate('Font')}
                    />
                    <Button
                        title='Sizing'
                        onPress={() => this.props.navigation.navigate('Sizing')}
                    />
                    <Button
                        title='Inputs'
                        onPress={() => this.props.navigation.navigate('Inputs')}
                    />
                    <Button
                        title='Scroll View Testing'
                        onPress={() => this.props.navigation.navigate('ScrollViewTest')}
                    />
                    <Button
                        title='Lists'
                        onPress={() => this.props.navigation.navigate('Lists')}
                    />
                    <Button
                        title='Networking'
                        onPress={() => this.props.navigation.navigate('Networking')}
                    />
                </View>
                <View style={{flex: 1}}/>
            </View>
        )
    }
}