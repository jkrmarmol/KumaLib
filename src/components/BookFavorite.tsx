import React, { useState } from 'react'
import { View, Text, ScrollView, Image, SafeAreaView, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { unsave } from '../redux/slices/bookSlice';
import { useAppDispatch } from '../redux/app/hook';
import type { IBookType } from '../typings/interfaces';

export default function BookFavorite({ cover, title, author, id }: IBookType) {
  const { width } = useWindowDimensions();
  const [favorite, setFavorite] = useState(true);
  const dispatch = useAppDispatch();

  const removeBook = async () => {
    try {
      setFavorite(!favorite)
      const { payload } = await dispatch(unsave({ id }));
      console.log(payload)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={style.container}>

        <TouchableOpacity style={style.bookContainer}>

          <Image source={{ uri: cover }} style={style.bookImages} />
          <View style={[style.bookTitleAuthor, { width: width / 3 }]}>
            <Text style={style.bookTitle}>{title}</Text>
            <Text style={style.bookAuthor}>{author}</Text>
          </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={removeBook}>
          {favorite ? <Ionicons name="heart-sharp" size={24} color="#F70000" />
            : <Ionicons name="heart-outline" size={24} color="black" />}
        </TouchableOpacity>

      </SafeAreaView>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    alignItems: 'center',
    marginBottom: 10
  },
  bookContainer: {
    flexDirection: 'row'
  },
  bookImages: {
    height: 180,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 12
  },
  bookTitleAuthor: {
    marginLeft: 7,
    justifyContent: 'center'
  },
  bookTitle: {
    fontFamily: 'PoppinsBold'
  },
  bookAuthor: {
    fontFamily: 'PoppinsMedium',
    fontStyle: 'italic'
  }
})