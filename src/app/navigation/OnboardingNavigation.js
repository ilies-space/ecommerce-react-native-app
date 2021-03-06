import React from 'react';
import OnboardingScreens from '../screens/Onboarding/OnboardingScreens';
import {createStackNavigator} from '@react-navigation/stack';
import Start from '../screens/Authentication/Start';
import AuthNavigationNavigation from './AuthNavigationNavigation';

export default function OnboardingNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnboardingScreens"
        component={OnboardingScreens}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthNavigationNavigation"
        component={AuthNavigationNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
