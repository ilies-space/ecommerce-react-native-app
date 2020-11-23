import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import OnboardingNavigation from './src/app/navigation/OnboardingNavigation';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <OnboardingNavigation />
      </NavigationContainer>
    </View>
  );
}
