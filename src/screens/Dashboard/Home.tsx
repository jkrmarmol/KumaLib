import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import GradientText from '../../components/GradientText';
import BookRender from '../../components/HomeBookRender';
import BookSaved from '../../components/HomeBookSaved';
import mostPopularSampleData from '../../constant/mostPopularSampleData.json';
import recentlyAddedSampleData from '../../constant/recentlyAddedSampleData.json';
import recommendedSampleData from '../../constant/recommendedSampleData.json';


export default function Home() {

  const { width } = useWindowDimensions();
  const [activeTab, setActiveTabs] = useState<string>('Popular');

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.container}>

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
        {activeTab === 'Popular' && <BookRender tab={activeTab} item={mostPopularSampleData.books} />}
        {activeTab === 'Recently Added' && <BookRender tab={activeTab} item={recentlyAddedSampleData.books} />}
        {activeTab === 'Recommended' && <BookRender tab={activeTab} item={recommendedSampleData.books} />}
      </ScrollView>

      <View style={style.bookListContainer}>
        <View style={style.bookListTitleSeeAll}>
          <Text style={style.bookListTitle}>My Booklists</Text>
          <TouchableOpacity>
            <Text style={style.bookListSeeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <BookSaved />
      </View>

    </ScrollView>
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
  }
})