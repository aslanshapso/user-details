import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json

import Home from './components/Home';
import UserScreen from './components/User';
import ListScreen from './components/List';

const HomeStack = StackNavigator({
  Home: { screen: Home },
  List: { screen: ListScreen },
});

const UserStack = StackNavigator({
  User: {
    screen: UserScreen,
    headerMode: 'none',
    header: null,
    navigationOptions: {},
  },
});
const ListStack = StackNavigator({
  List: { screen: ListScreen },
  User: { screen: UserStack },
  Home: { screen: HomeStack },
});

export default TabNavigator(
  {
    Home: { screen: HomeStack },
    List: { screen: ListStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'User') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'List') {
          iconName = `ios-list${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
    swipeEnabled: false,
    headerMode: 'none',
    headerVisible: false,
  }
);
