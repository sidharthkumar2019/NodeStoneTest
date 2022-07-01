import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Signup } from '../screens/signupScreen';
import { Signin } from '../screens/signinScreen';

/**
* @author
* @function AuthStack
**/

const Stack = createStackNavigator();

export const AuthStack = (props) => {
  return(
    <Stack.Navigator>
        <Stack.Screen name='Signin' component={Signin} />
        <Stack.Screen name='Signup' component={Signup} />
    </Stack.Navigator>
   )

 }