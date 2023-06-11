import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { NavigationProp, ParamListBase } from '@react-navigation/native'
import type { IBookType } from '../typings/interfaces'


export default function BookLists({ id, title, cover, author, hash }: IBookType) {
  const nav = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      onPress={() => nav.navigate('BookInformation', { id, title, hash })}
      style={style.container}>
      <Image
        source={{ uri: cover }}
        style={style.bookImage}
      />
      <View style={style.bookTitleAuthorContainer}>
        <Text style={style.bookTitleText}>{title}</Text>
        <Text style={style.bookAuthorText}>by: {author}</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 7,
  },
  bookImage: {
    resizeMode: 'contain',
    width: 120,
    height: 180,
    borderRadius: 12
  },
  bookTitleAuthorContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    flex: 1
  },
  bookTitleText: {
    fontFamily: 'PoppinsBold',
    fontSize: 16
  },
  bookAuthorText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12
  }
})