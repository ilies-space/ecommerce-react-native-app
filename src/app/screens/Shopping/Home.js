import React from 'react';
import {View, Text, FlatList, ImageBackground} from 'react-native';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export default function Home() {
  const categoriesList = [
    {
      title: 'CLOTHING',
      img:
        'https://www.friendlyfashion.my/wp-content/uploads/2020/01/fashion-clothing-line-rail.jpeg',
    },
    {
      title: 'ACCESSORIES',
      img:
        'https://www.elvisa.fr/wp-content/uploads/2017/11/Les-accessoires-de-mode-Elvisa-JASAK-Paris.jpg',
    },
    {
      title: 'SHOES',
      img:
        'https://www.retail-photography.co.uk/wp-content/uploads/2017/10/photographer-for-shoe-brands-and-leather-company.jpg',
    },
    {
      title: 'SHOES2',
      img:
        'https://www.retail-photography.co.uk/wp-content/uploads/2017/10/photographer-for-shoe-brands-and-leather-company.jpg',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* CategoriesList */}
      <View>
        <FlatList
          horizontal
          keyExtractor={(item) => item.title}
          data={categoriesList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  backgroundColor: 'grey',

                  margin: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 120,
                  width: 250,
                  borderRadius: 10,
                }}>
                <ImageBackground
                  source={{
                    uri: item.img,
                  }}
                  style={{
                    flex: 1,
                    resizeMode: 'cover',
                    justifyContent: 'center',
                    height: 120,
                    width: 250,
                    borderRadius: 10,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 35, color: 'white'}}>
                    {item.title}
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
