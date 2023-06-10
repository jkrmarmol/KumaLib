import { View, Text, useWindowDimensions, ScrollView, Image, TextInput, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import BookLists from '../../components/BookLists';
import { useAppDispatch, useAppSelector } from '../../redux/app/hook';
import { search } from '../../redux/slices/bookSlice';
import { searchBook } from '../../redux/slices/searchSlice';


export default function Search() {
  const { width } = useWindowDimensions()
  const WIDTH = (90 / 100) * width;
  const [searchBook, setSearchBook] = useState<string>('')
  const dispatch = useAppDispatch();
  const selectBookSearch = useAppSelector(state => state.book.search);
  const selectBookInputSearch = useAppSelector(state => state.search);

  // useEffect(() => {
  //   dispatch(search(selectBookInputSearch));
  // }, [])


  return (
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