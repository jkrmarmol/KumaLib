import { View, Text, useWindowDimensions, ScrollView, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Feather } from '@expo/vector-icons';
import GradientText from '../../components/GradientText'
import BookLists from '../../components/BookLists';
import { useAppDispatch, useAppSelector } from '../../redux/app/hook';
import { recently } from '../../redux/slices/bookSlice';


export default function Recently() {
  const { width } = useWindowDimensions()
  const WIDTH = (90 / 100) * width;
  const dispatch = useAppDispatch();
  const selectBookRecently = useAppSelector(state => state.book.recently);

  useEffect(() => {
    dispatch(recently())
  }, [])

  return (
    <View style={style.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: WIDTH, flex: 1 }}>

        <View style={style.headerContainer}>
          <Feather name="clock" size={24} color="#F70000" />
          <GradientText style={style.headerText}>Recently Added</GradientText>
        </View>

        <View style={style.bookContainer}>
          {selectBookRecently.status === 'ok' && selectBookRecently.response?.success === 1
            ? selectBookRecently.response.books.map((e: any, index: number) => <BookLists key={index} {...e} />)
            : (
              <View style={[style.bookActivityIndicator]}>
                <ActivityIndicator size="large" color="#F7A600" />
              </View>
            )}
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
  bookActivityIndicator: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 28,
    marginLeft: 5
  },
  bookContainer: {
    marginHorizontal: 10
  }
})