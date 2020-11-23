import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import AuthNavigationNavigation from './src/app/navigation/AuthNavigationNavigation';
import OnboardingNavigation from './src/app/navigation/OnboardingNavigation';

export default function App() {
  const isFirstTimeUse = true;
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        {isFirstTimeUse ? <OnboardingNavigation /> : <View />}
      </NavigationContainer>
    </View>
  );
}
