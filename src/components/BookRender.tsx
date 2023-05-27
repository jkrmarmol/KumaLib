import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { IBookRenderParam } from '../typings/interface';


export default function BookRender({ tab, item }: IBookRenderParam) {

  return (
    <>
      {item ? item.map((data, index) => (
        <TouchableOpacity
          onPress={() => console.log(data.id)}
          key={index}
          style={style.container}
        >
          <Image
            source={{ uri: data.cover }}
            style={style.bookImages}
          />
          <Text style={style.bookTitle}>{data.title}</Text>
          <Text style={style.bookAuthor}>by: {data.author}</Text>
        </TouchableOpacity>
      )) : 'Loading...'}
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