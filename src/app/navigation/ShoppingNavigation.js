import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Shopping/Home';
import ProductDetails from '../screens/Shopping/ProductDetails';

export default function ShoppingNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
