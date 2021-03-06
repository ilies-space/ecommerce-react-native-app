import React from 'react';
import {View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function OnboardingScreens() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Onboarding
        onSkip={() => {
          console.log('DONE');
          navigation.navigate('AuthNavigationNavigation');
        }}
        onDone={() => {
          console.log('DONE');
          navigation.navigate('AuthNavigationNavigation');
        }}
        pages={[
          {
            backgroundColor: '#000',
            image: <FontAwesome5 name="store" size={100} color="#fff" />,
            title: 'Store EXMPLE',
            subtitle: 'Welcome to our store app , buy and order easly ! ',
          },
          {
            backgroundColor: '#000',
            image: <FontAwesome5 name="luggage-cart" size={100} color="#fff" />,
            title: 'Wishlist',
            subtitle:
              'Build a wishlist with your favourite products to buy them later .',
          },
          {
            backgroundColor: '#000',
            image: (
              <MaterialIcons name="notifications" size={100} color="#fff" />
            ),
            title: 'Notifications',
            subtitle:
              'Get notifications for new products , promotions and discounts .',
          },
        ]}
      />
    </View>
  );
}
