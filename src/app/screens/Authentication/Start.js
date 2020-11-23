import React from 'react';
import {Text, View} from 'react-native';
import MyButton from '../../components/MyButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

export default function Start() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {/* STORE LOGO */}
      <View
        style={{
          alignItems: 'center',
          flex: 2,
          justifyContent: 'center',
        }}>
        <FontAwesome5 name="store" size={100} color="#000" />
        <Text style={{fontSize: 26, fontWeight: 'bold'}}>
          Welcome to storeName
        </Text>
        <Text style={{fontSize: 18}}>
          Shop and get updated on new products and sales with our app.
        </Text>
      </View>
      {/* AUTH   */}
      <View style={{backgroundColor: 'white', flex: 3}}>
        <MyButton
          backgroundColor={'black'}
          color={'white'}
          borderColor={'black'}
          onPress={() => {
            console.log('Log in');
            navigation.navigate('Login');
          }}
          text={'Log in'}
        />
        <MyButton
          backgroundColor={'white'}
          color={'black'}
          borderColor={'black'}
          onPress={() => {
            console.log('Sing Up');
            navigation.navigate('SingUp');
          }}
          text={'Sing Up'}
        />
      </View>
    </View>
  );
}
