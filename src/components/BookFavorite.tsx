import { View, Text, ScrollView, Image, SafeAreaView, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import bookSavedSampleData from '../constant/bookSavedSampleData.json';

export default function BookFavorite() {
  const { width } = useWindowDimensions();

  return (
    <ScrollView>
      {bookSavedSampleData.books.map((data, index) => {
        return (
          <SafeAreaView
            key={index}
            style={style.container}
          >

            <TouchableOpacity style={style.bookContainer}>

              <Image source={{ uri: data.cover }} style={style.bookImages} />
              <View style={[style.bookTitleAuthor, { width: width / 3 }]}>
                <Text style={style.bookTitle}>{data.title}</Text>
                <Text style={style.bookAuthor}>{data.author}</Text>
              </View>

            </TouchableOpacity>

            <TouchableOpacity>
              {/* <Ionicons name="heart-outline" size={24} color="black" /> */}
              <Ionicons name="heart-sharp" size={24} color="#F70000" />
            </TouchableOpacity>

          </SafeAreaView>
        );
      })}
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