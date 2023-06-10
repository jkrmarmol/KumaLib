import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import GradientText from '../../components/GradientText';
import HomeBookRender from '../../components/HomeBookRender';
import BookFavorite from '../../components/BookFavorite';
import { useAppDispatch, useAppSelector } from '../../redux/app/hook';
import { saved, popular, recently, recommended } from '../../redux/slices/bookSlice';
import type { IBook } from '../../typings/interfaces';


export default function Home() {
  const nav = useNavigation<NavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const selectBookSaved = useAppSelector(state => state.book.saved);
  const selectBookPopular = useAppSelector(state => state.book.popular);
  const selectBookRecently = useAppSelector(state => state.book.recently);
  const selectBookRecommended = useAppSelector(state => state.book.recommended);
  const { width } = useWindowDimensions();
  const [activeTab, setActiveTabs] = useState<string>('Popular');

  useEffect(() => {
    dispatch(saved())
    dispatch(popular())
    dispatch(recently())
    dispatch(recommended())
  }, [])


  return (
    <>
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.container}
      >

        <View style={style.homeLatestBookContainer}>
          <GradientText style={style.homeLatestBookText}>Discover Latest Book</GradientText>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={[style.horizontalTabs]}>
            <TouchableOpacity
              style={style.horizontalTabsButton}
              onPress={() => setActiveTabs('Popular')}
            >
              <Text style={[activeTab === 'Popular' ? style.activeTab : style.inActiveTab]}>Popular</Text>
              <View style={[activeTab === 'Popular' && style.activeTabIndicator]}></View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.horizontalTabsButton}
              onPress={() => setActiveTabs('Recently Added')}>
              <Text style={[activeTab === 'Recently Added' ? style.activeTab : style.inActiveTab]}>Recently Added</Text>
              <View style={[activeTab === 'Recently Added' && style.activeTabIndicator]}></View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.horizontalTabsButton}
              onPress={() => setActiveTabs('Recommended')}>
              <Text style={[activeTab === 'Recommended' ? style.activeTab : style.inActiveTab]}>Recommended</Text>
              <View style={[activeTab === 'Recommended' && style.activeTabIndicator]}></View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <ScrollView horizontal>
          {activeTab === 'Popular' ? (selectBookPopular.response?.success === 1
            ? selectBookPopular.response.books.map((e: any, index: number) => <HomeBookRender key={index} {...e} />) : (
              <View style={[style.bookActivityIndicator, { width }]}>
                <ActivityIndicator size="large" color="#F7A600" />
              </View>
            )) : null}
          {activeTab === 'Recently Added' ? (selectBookRecently.response?.success === 1
            ? selectBookRecently.response.books.map((e: any, index: number) => <HomeBookRender key={index} {...e} />) : (
              <View style={[style.bookActivityIndicator, { width }]}>
                <ActivityIndicator size="large" color="#F7A600" />
              </View>
            )) : null}
          {activeTab === 'Recommended' ? (selectBookRecommended.response?.success === 1
            ? selectBookRecommended.response.books.map((e: any, index: number) => <HomeBookRender key={index} {...e} />) : (
              <View style={[style.bookActivityIndicator, { width }]}>
                <ActivityIndicator size="large" color="#F7A600" />
              </View>
            )) : null}
        </ScrollView>

        <View style={style.bookListContainer}>
          <View style={style.bookListTitleSeeAll}>
            <Text style={style.bookListTitle}>My Booklists</Text>
            <TouchableOpacity onPress={() => nav.navigate('Bookmark')}>
              <Text style={style.bookListSeeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          {selectBookSaved.response?.success === 1
            ? selectBookSaved.response.books.map((e: IBook, index: number) => <BookFavorite key={index} {...e} />)
            : <ActivityIndicator size="large" color="#F7A600" />}
        </View>

      </ScrollView>
    </>
  )
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  activeTab: {
    fontFamily: 'PoppinsSemiBold'
  },
  activeTabIndicator: {
    borderBottomColor: '#F70000',
    borderRadius: 100,
    borderBottomWidth: 3,
    width: 30,
    alignSelf: 'center'
  },
  inActiveTab: {
    fontFamily: 'PoppinsMedium',
    opacity: 0.4
  },
  homeLatestBookContainer: {
    marginLeft: 15
  },
  homeLatestBookText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 28
  },
  horizontalTabs: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  horizontalTabsButton: {
    marginRight: 30
  },
  bookListContainer: {
    marginHorizontal: 15,
    marginBottom: 100,
  },
  bookListTitleSeeAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  bookListTitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18
  },
  bookListSeeAll: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    color: '#F70000'
  },
  bookActivityIndicator: {
    height: 200,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})