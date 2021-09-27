import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import useDash from '../../hooks/useDash/useDash';
import {mainScreens} from '../../navigation/router';
import {styles} from './styles';

export default function Books() {
  const navigation = useNavigation();
  const {books, getBook} = useDash();

  useEffect(() => {
    getBook();
  }, []);

  const handleBook = id => {
    navigation.navigate(mainScreens.DetailScreen, {id});
  };
  const renderBook = ({item}) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bookandname}>
          <TouchableWithoutFeedback onPress={() => handleBook(item.id)}>
            <Image
              style={styles.image}
              source={{
                uri: 'http://192.168.1.37:8080/api/public/book/' + item.image,
              }}
            />
          </TouchableWithoutFeedback>
          <Text style={styles.bookname}>{item.book_name}</Text>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={books}
        renderItem={renderBook}
      />
    </View>
  );
}
