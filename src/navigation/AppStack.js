import React from 'react';
import {HomeScreen} from '../screens/homeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ProfileScreen} from '../screens/profileScreen';
import { CalculatorScreen } from '../screens/calculatorScreen';
import { ImageScreen } from '../screens/imageUploadScreen';
import { TextScreen } from '../screens/textUploadSreen';

/**
 * @author
 * @function AppStack
 **/

const Tab = createBottomTabNavigator();

export const AppStack = props => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home')  iconName = 'home';
            else if (route.name === 'Profile') iconName = 'settings';
            else if (route.name === 'Image Screen') iconName = 'image';
            else if (route.name === 'Text Screen') iconName = 'create';
            else if (route.name === 'Calculator') iconName = 'calculator';

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0E86D4',
          tabBarInactiveTintColor: 'gray',
        })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Image Screen" component={ImageScreen} />
      <Tab.Screen name="Text Screen" component={TextScreen} />
      <Tab.Screen name="Calculator" component={CalculatorScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
