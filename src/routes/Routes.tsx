import React from 'react';

import { createAppContainer } from 'react-navigation';

import { createStackNavigator, } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

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

AppBNavigator.navigationOptions = ({ navigation }: any) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }: any) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'About') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
            iconName = `ios-options`;
        } else {
            iconName = `ios-options`;
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
    tabBarLabel: 'About!',
});



export default createAppContainer(createBottomTabNavigator({ AppNavigator, AppBNavigator }));