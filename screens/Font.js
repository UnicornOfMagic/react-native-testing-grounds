import React, {Component} from 'react';
import {StyleSheet, ScrollView, Image, Text} from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text style={this.props.style}>Hello {this.props.name}!</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText};
            });
        }, 100);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text style={this.props.style}>{display}</Text>
        );
    }
}

export default class Font extends Component<Props> {
    static navigationOptions = {
        title: 'Font Demo'
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image
                    source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
                    style={{width: 320, height: 180}}
                />
                <Text style={styles.bigblue}>
                    On iOS, a React Native ScrollView uses a native UIScrollView.
                    On Android, it uses a native ScrollView.

                    On iOS, a React Native Image uses a native UIImageView.
                    On Android, it uses a native ImageView.

                    React Native wraps the fundamental native components, giving you
                    the performance of a native app, plus the clean design of React.
                </Text>
                <Text style={styles.bigblue}>Also lots of filler to get scrolling</Text>
                <Text style={styles.bigblue}>Also lots of filler to get scrolling</Text>
                <Text style={styles.bigblue}>Also lots of filler to get scrolling</Text>
                <Text style={styles.bigblue}>Also lots of filler to get scrolling</Text>
                <Text style={styles.bigblue}>Also lots of filler to get scrolling</Text>
                <Text style={styles.bigblue}>Also lots of filler to get scrolling</Text>
                <Greeting name='Paige' style={styles.red}/>
                <Greeting name='Ben' style={styles.bigblue}/>
                <Greeting name='Sharon' style={[styles.bigblue, styles.red]}/>
                <Greeting name='Mark' style={[styles.red, styles.bigblue]}/>
                <Blink text='Blinking?!?!' style={styles.red}/>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});
