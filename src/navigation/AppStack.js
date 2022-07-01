import React from 'react';
import {HomeScreen} from '../screens/homeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from '../screens/profileScreen';

/**
 * @author
 * @function AppStack
 **/

const Tab = createBottomTabNavigator();

export const AppStack = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
