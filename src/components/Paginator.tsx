import React from 'react'
import { View, Animated, useWindowDimensions, StyleSheet } from 'react-native'
import type { IPaginatorParam } from '../typings/interfaces';


export default function Paginator({ data, scrollX }: IPaginatorParam) {
  const { width } = useWindowDimensions();

  return (
    <View style={style.container}>
      {data.map((_: any, i: any) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp'
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        });

        return <Animated.View
          style={[style.dot, { width: dotWidth, opacity }]}
          key={i.toString()}
        />;
      })}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  dot: {
    height: 7,
    borderRadius: 100,
    backgroundColor: '#F70000',
    marginHorizontal: 8,
  }
})