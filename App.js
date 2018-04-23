import React, {Component}from 'react';
import { StackNavigator } from 'react-navigation'
import Home from './screens/Home.js'
import Font from './screens/Font.js'
import Sizing from './screens/Sizing.js'
import Inputs from './screens/Inputs.js'
import ScrollViewTest from './screens/ScrollView.js'
import Lists from './screens/Lists.js'
import Networking from './screens/Networking.js'

const RootStack = StackNavigator(
    {
        Home: { screen: Home },
        Font: { screen: Font },
        Sizing: { screen: Sizing },
        Inputs: { screen: Inputs },
        ScrollViewTest: { screen: ScrollViewTest},
        Lists: { screen: Lists },
        Networking: { screen: Networking },
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