import React from 'react';
import { StackNavigator } from 'react-navigation'
import Home from './screens/Home.js'
import Font from './screens/Font.js'

const RootStack = StackNavigator(
    {
        Home: { screen: Home },
        Font: { screen: Font }
    },
    {
        initialRouteName: 'Home'
    }
);

type Props = {};

export default class App extends React.Component {
    render() {
        return (
            <RootStack />
        );
    }
}