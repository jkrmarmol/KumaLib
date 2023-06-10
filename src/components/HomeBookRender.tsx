import React from 'react'
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';


export default function HomeBookRender({ id, title, cover, author, hash }: any) {
  const nav = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <>
      <TouchableOpacity
        onPress={() => nav.navigate('BookInformation', { id, title, hash })}
        style={style.container}
      >
        <Image
          source={{ uri: cover }}
          style={style.bookImages}
        />
        <Text style={style.bookTitle}>{title}</Text>
        <Text style={style.bookAuthor}>by: {author}</Text>
      </TouchableOpacity>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginRight: 20,
    marginLeft: 20,
    width: 200,
    borderRadius: 12,
  },
  bookImages: {
    borderRadius: 12,
    height: 300,
    resizeMode: 'contain'
  },
  bookTitle: {
    fontSize: 14,
    fontFamily: 'PoppinsSemiBold',
    paddingHorizontal: 5,
    marginTop: 10,
  },
  bookAuthor: {
    fontSize: 11,
    fontFamily: 'PoppinsSemiBold',
    opacity: 0.6,
    paddingHorizontal: 5
  }
})