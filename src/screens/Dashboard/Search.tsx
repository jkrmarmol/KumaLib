import React from 'react'
import { View, Text, useWindowDimensions, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import BookLists from '../../components/BookLists';
import { useAppSelector } from '../../redux/app/hook';


export default function Search() {
  const { width } = useWindowDimensions()
  const WIDTH = (90 / 100) * width;
  const selectBookSearch = useAppSelector(state => state.book.search);

  return (
    <>
      <StatusBar style='dark' />
      <View style={style.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ width: WIDTH, flex: 1 }}>

          <View style={style.bookContainer}>
            {selectBookSearch.status === 'ok'
              && (selectBookSearch.response?.success === 1 && selectBookSearch.response.books.length >= 1)
              ? selectBookSearch.response.books.map((e: any, index: number) => <BookLists key={index} {...e} />)
              : (selectBookSearch.response?.success === 1 && selectBookSearch.response.books.length === 0)
                ? <View style={style.notfoundContainer}>
                  <Text style={style.notfoundText}>Book Not found</Text>
                </View>
                : <View style={[style.bookActivityIndicator]}>
                  <ActivityIndicator size="large" color="#F7A600" />
                </View>}
          </View>

        </ScrollView>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  bookContainer: {
    marginHorizontal: 10
  },
  bookActivityIndicator: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notfoundContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  notfoundText: {
    textAlign: 'center',
    fontFamily: 'PoppinsRegular'
  }
})