import React from 'react'
import { View, Text, useWindowDimensions, Image, StyleSheet } from 'react-native'
import { ISlideItems } from '../typings/interface';

export default function OnboardingItems({ item }: { item: ISlideItems }) {
  const { width } = useWindowDimensions();

  return (
    <View style={[style.container, { width: (85 / 100) * width }]}>
      <Image
        source={item.images}
        style={style.image}
      />

      <View style={[style.descriptionContainer, { width: (85 / 100) * width }]}>
        <Text
          style={style.description}
        >{item.description}</Text>
      </View>

    </View >
  )
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionContainer: {
    padding: 20
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
})