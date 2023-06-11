import React, { useEffect } from 'react';
import { View, useWindowDimensions, StyleSheet, ActivityIndicator, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import BookFavorite from '../../components/BookFavorite';
import GradientText from '../../components/GradientText';
import { useAppDispatch, useAppSelector } from '../../redux/app/hook';
import { saved } from '../../redux/slices/bookSlice';


export default function Bookmark() {
  const { width } = useWindowDimensions();
  const WIDTH = (90 / 100) * width;
  const dispatch = useAppDispatch();
  const selectBookSaved = useAppSelector(state => state.book.saved);

  useEffect(() => {
    dispatch(saved())
  }, [])

  return (
    <View style={style.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: WIDTH }}>

        <View style={style.titleContainer}>
          <Ionicons name="bookmark-outline" size={30} color="#F70000" />
          <GradientText style={style.myBooklistsText}>My Booklists</GradientText>
        </View>

        {selectBookSaved.status === 'ok'
          && selectBookSaved.response?.success === 1
          ? selectBookSaved.response?.books.map((e: any, index: number) => <BookFavorite key={index} {...e} />)
          : (
            <View style={[style.bookActivityIndicator]}>
              <ActivityIndicator size="large" color="#F7A600" />
            </View>
          )}

      </ScrollView>
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
  },
  bookActivityIndicator: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  }
})