import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import socMedImages from '../constant/socmedImages'


export default function SocMedAuth() {
  return (
    <View style={style.container}>
      {socMedImages.map((e, index) => (
        <TouchableOpacity
          key={index}
          style={style.iconTouchableOpacity}>
          <Image
            source={e.images}
            style={style.iconImages}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  iconTouchableOpacity: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  iconImages: {
    height: 40,
    width: 40,
    resizeMode: 'contain'
  }

})