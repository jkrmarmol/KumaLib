import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import type { ITeamMember } from '../typings/interfaces'


export default function TeamMember({ image, name, position, course }: ITeamMember) {
  return (
    <View style={style.container}>
      <LinearGradient
        colors={['#F7A600', '#F70000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={style.linearGradient}
      >
        <Image
          source={image}
          style={style.memberImages}
        />
      </LinearGradient>

      <View style={{ marginVertical: 20 }}>
        <Text style={style.name}>{name}</Text>
        <Text style={style.position}>{position}</Text>
        <Text style={style.course}>{course}</Text>
      </View>

    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20
  },
  linearGradient: {
    borderRadius: 100,
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center'
  },
  memberImages: {
    resizeMode: 'contain',
    height: 120,
    width: 120,
    borderRadius: 100
  },
  name: {
    textAlign: 'center',
    color: '#F70000',
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18
  },
  position: {
    textAlign: 'center',
    fontFamily: 'PoppinsSemiBold',
    letterSpacing: 3,
    fontSize: 14
  },
  course: {
    textAlign: 'center',
    fontFamily: 'PoppinsMedium',
    fontSize: 14,
    color: '#545454'
  }
})