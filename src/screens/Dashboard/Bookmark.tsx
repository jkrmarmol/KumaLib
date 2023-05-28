import { View, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'
import BookFavorite from '../../components/BookFavorite';
import GradientText from '../../components/GradientText';
import { Ionicons } from '@expo/vector-icons';

export default function Bookmark() {
  const { width } = useWindowDimensions();
  const WIDTH = (90 / 100) * width;

  return (
    <View style={style.container}>
      <View style={{ width: WIDTH }}>

        <View style={style.titleContainer}>
          <Ionicons name="bookmark-outline" size={30} color="#F70000" />
          <GradientText style={style.myBooklistsText}>My Booklists</GradientText>
        </View>

        <BookFavorite />

      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  myBooklistsText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 28
  }
})