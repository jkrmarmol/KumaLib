import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import type { NavigationProp, ParamListBase } from '@react-navigation/native'
import type { IDataBookRender } from '../typings/interfaces'
import React from 'react'


export default function BookLists({ id, title, cover, author, hash }: any) {
  const nav = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      onPress={() => nav.navigate('BookInformation', { id, title, hash })}
      style={{
        flexDirection: 'row',
        marginVertical: 7,
      }}>
      <Image
        source={{ uri: cover }}
        style={{
          resizeMode: 'contain',
          width: 120,
          height: 180,
          borderRadius: 12
        }}
      />
      <View style={{
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 10,
        flexWrap: 'wrap',
        flex: 1
      }}>
        <Text style={{
          fontFamily: 'PoppinsBold',
          fontSize: 16
        }}>{title}</Text>
        <Text style={{
          fontFamily: 'PoppinsRegular',
          fontSize: 12
        }}>by: {author}</Text>
      </View>
    </TouchableOpacity>
  )
}