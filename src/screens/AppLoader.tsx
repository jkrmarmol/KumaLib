import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import KumaLibLogo from '../assets/images/KumaLib_Logo.png';


export default function AppLoader() {

  const nav = useNavigation<NavigationProp<ParamListBase>>();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate('Home');
    }, 3000)
  }, [])

  return (
    <>
      <StatusBar
        style='light'
      />
      <View style={style.container}>
        <Image
          source={KumaLibLogo}
          style={style.images}
        />
      </View>
    </>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#151521'
  },
  images: {
    width: 200,
    resizeMode: 'contain'
  }
})