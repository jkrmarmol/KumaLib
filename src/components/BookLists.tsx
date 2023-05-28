import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BookLists({ data }: any) {
  return (
    <TouchableOpacity
      onPress={() => console.log(data.id)}
      style={{
        flexDirection: 'row',
        marginVertical: 7,
      }}>
      <Image
        source={{ uri: data.cover }}
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
        }}>{data.title}</Text>
        <Text style={{
          fontFamily: 'PoppinsRegular',
          fontSize: 12
        }}>by: {data.author}</Text>
      </View>
    </TouchableOpacity>
  )
}