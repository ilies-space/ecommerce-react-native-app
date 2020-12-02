import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MyButton from '../../components/MyButton';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SingUp() {
  const navigation = useNavigation();
  const [FullName, setFullName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  return (
    <View style={{flex: 1, paddingHorizontal: 40, paddingTop: '20%'}}>
      <ScrollView>
        <View style={{}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <MaterialIcons name="arrow-back-ios" size={40} color="#000" />
          </TouchableOpacity>
          <View style={{marginVertical: 20}} />

          <View>
            <Text style={{fontWeight: 'bold', fontSize: 40}}>
              Create new account
            </Text>
          </View>
          <View style={{marginVertical: 20}} />

          <TextInput
            onChangeText={(v) => {
              setFullName(v);
            }}
            value={FullName}
            padding={20}
            fontSize={26}
            placeholderTextColor={'grey'}
            placeholder={'Full Name'}
            style={{
              borderWidth: 3,
              borderRadius: 20,
            }}
          />

          <View style={{marginVertical: 20}} />
          <TextInput
            onChangeText={(v) => {
              setPhoneNumber(v);
            }}
            value={PhoneNumber}
            padding={20}
            fontSize={26}
            placeholderTextColor={'grey'}
            placeholder={'Phone Number'}
            style={{
              borderWidth: 3,
              borderRadius: 20,
            }}
          />

          <View style={{marginVertical: 20}} />

          <TextInput
            onChangeText={(v) => {
              setEmail(v);
            }}
            value={Email}
            padding={20}
            fontSize={26}
            placeholderTextColor={'grey'}
            placeholder={'E-mail Address'}
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
            backgroundColor={'#3C4B88'}
            color={'white'}
            borderColor={'black'}
            onPress={() => {
              console.log('Sing Up');
              navigation.navigate('Login');
            }}
            text={'Sing Up'}
          />
        </View>
      </ScrollView>
    </View>
  );
}
