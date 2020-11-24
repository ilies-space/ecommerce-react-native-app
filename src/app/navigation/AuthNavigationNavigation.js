import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Start from '../screens/Authentication/Start';
import SingUp from '../screens/Authentication/SingUp';
import Login from '../screens/Authentication/Login';
import ShoppingNavigation from './ShoppingNavigation';

export default function AuthNavigationNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={Start}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SingUp"
        component={SingUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ShoppingNavigation"
        component={ShoppingNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
