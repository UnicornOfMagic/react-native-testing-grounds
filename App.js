import React, {Component}from 'react';
import { StackNavigator } from 'react-navigation'
import Home from './screens/Home.js'
import Font from './screens/Font.js'
import Sizing from './screens/Sizing.js'
import Inputs from './screens/Inputs.js'

const RootStack = StackNavigator(
    {
        Home: { screen: Home },
        Font: { screen: Font },
        Sizing: { screen: Sizing },
        Inputs: { screen: Inputs },
    },
    {
        initialRouteName: 'Home'
    }
);

type Props = {};

export default class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}