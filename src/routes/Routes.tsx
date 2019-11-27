import { createAppContainer } from 'react-navigation';


import { createStackNavigator, } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen } from './HomeScreen';

import { AboutScreen } from './About';


const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    About: {
        screen: AboutScreen
    }
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#000',
        },
    },
});

const AppBNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    About: {
        screen: AboutScreen
    }
}, {
    initialRouteName: 'About',
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'red',
        },
    },
});

AppNavigator.navigationOptions = {
    tabBarLabel: 'Home!',
};

AppBNavigator.navigationOptions = {
    tabBarLabel: 'Settings!',
};



export default createAppContainer(createBottomTabNavigator({ AppNavigator, AppBNavigator }));