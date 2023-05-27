import React, { useCallback } from 'react';
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './src/navigator/MainNavigator';
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'


SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    PoppinsRegular: require('./src/assets/fonts/Poppins/Poppins-Regular.ttf'),
    PoppinsMedium: require('./src/assets/fonts/Poppins/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('./src/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
    PoppinsBold: require('./src/assets/fonts/Poppins/Poppins-Bold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 300)
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}