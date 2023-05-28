import { View, Text, useWindowDimensions, ScrollView, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import GradientText from '../../components/GradientText'
import recentlyAddedSampleData from '../../constant/recentlyAddedSampleData.json';
import BookSample from '../../assets/images/book-sample.png'
// import Booklists from '../../components/Booklists';
import BookLists from '../../components/BookLists';


export default function Recently() {
  const { books } = recentlyAddedSampleData;
  console.log(books)
  const { width } = useWindowDimensions()
  const WIDTH = (90 / 100) * width;

  return (
    <View style={{
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#fff'
    }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: WIDTH,
          flex: 1
        }}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Feather name="clock" size={24} color="#F70000" />
          <GradientText style={{
            fontFamily: 'PoppinsSemiBold',
            fontSize: 28,
            marginLeft: 5
          }}>Recently Added</GradientText>
        </View>

        <View style={{
          marginHorizontal: 10
        }}>
          {
            books.map((data) => (
              <BookLists data={data} />
            ))
          }
        </View>

      </ScrollView>
    </View>
  )
}