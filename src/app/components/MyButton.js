import React from 'react';
import {TouchableHighlight, Text} from 'react-native';

export default function MyButton(props) {
  return (
    <TouchableHighlight
      style={{
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: props.backgroundColor,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: props.borderColor,
      }}
      onPress={props.onPress}
      underlayColor="#fff">
      <Text
        style={{
          color: props.color,
          textAlign: 'center',
        }}>
        {props.text}
      </Text>
    </TouchableHighlight>
  );
}
