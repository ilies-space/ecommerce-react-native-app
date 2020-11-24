import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MyButton from '../../components/MyButton';
import {useNavigation} from '@react-navigation/native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Login() {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <View style={{flex: 1, paddingHorizontal: 40, paddingTop: '20%'}}>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <MaterialIcons name="arrow-back-ios" size={40} color="#000" />
        </TouchableOpacity>
        <View style={{marginVertical: 20}} />

        <View>
          <Text style={{fontWeight: 'bold', fontSize: 40}}>Sing In</Text>
        </View>
        <View style={{marginVertical: 20}} />

        <TextInput
          onChangeText={(v) => {
            setEmail(v);
          }}
          value={Email}
          padding={20}
          fontSize={26}
          placeholderTextColor={'grey'}
          placeholder={'E-mail or phone number'}
          style={{
            borderWidth: 3,
            borderRadius: 20,
          }}
        />
        <View style={{marginVertical: 20}} />
        <TextInput
          onChangeText={(v) => {
            setPassword(v);
          }}
          value={Password}
          padding={20}
          fontSize={26}
          placeholderTextColor={'grey'}
          placeholder={'Password'}
          style={{
            borderWidth: 3,
            borderRadius: 20,
          }}
        />
      </View>
      <View style={{marginVertical: 20}} />

      <View style={{}}>
        <MyButton
          backgroundColor={'black'}
          color={'white'}
          borderColor={'black'}
          onPress={() => {
            console.log('Log in');
            navigation.navigate('ShoppingNavigation');
          }}
          text={'Log in'}
        />

        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 24}}>OR</Text>
        </View>

        <MyButton
          backgroundColor={'#3C4B88'}
          color={'white'}
          borderColor={'black'}
          onPress={() => {
            console.log('Facebook Login');
          }}
          text={'Facebook Login'}
        />
      </View>
    </View>
  );
}
