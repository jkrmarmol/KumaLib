import React, { useState, useRef, MutableRefObject } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import slide from '../constant/slideItems';
import OnboardingItems from '../components/OnboardingItems';
import Paginator from '../components/Paginator';


export default function Home() {
  const nav = useNavigation<NavigationProp<ParamListBase>>();
  const { width } = useWindowDimensions();
  const WIDTH = (90 / 100) * width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX: MutableRefObject<Animated.Value> = useRef(new Animated.Value(0));
  const slideRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index)
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <>
      <StatusBar style='dark' />

      <View style={style.mainContainer}>
        <View style={[style.container, { width: WIDTH }]}>
          <Image
            source={require('../assets/images/KumaLib_Logo.png')}
            style={style.logoImage}
          />

          <View style={[style.onboardingContainer]}>
            <FlatList
              data={slide}
              renderItem={({ item }) => <OnboardingItems item={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              bounces={false}
              // keyExtractor={(item) => item.id}
              onScroll={Animated.event([{
                nativeEvent: {
                  contentOffset: {
                    x: scrollX.current
                  }
                }
              }], {
                useNativeDriver: false
              })}
              scrollEventThrottle={32}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={slideRef}
            />

            <Paginator
              data={slide}
              scrollX={scrollX.current}
            />
          </View>

          <View style={style.buttonContainer}>
            <TouchableOpacity
              onPress={() => nav.navigate('SignIn')}
              style={style.buttonTouchableOpacity}
            >
              <Text style={style.buttonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => nav.navigate('SignUp')}
              style={style.buttonTouchableOpacity}
            >
              <Text style={style.buttonText}>Create new account</Text>
            </TouchableOpacity>
          </View>

          <View style={style.footerContainer}>
            <Text style={style.footerText}>Designed and Developed by Kurt Russelle Marmol</Text>
          </View>
        </View>
      </View>
    </>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logoImage: {
    height: 50,
    width: 180,
    resizeMode: 'contain',
    marginTop: 45
  },
  onboardingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 25,
    gap: 12,
  },
  buttonTouchableOpacity: {
    backgroundColor: '#000',
    width: '100%',
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 12,
    fontFamily: 'PoppinsMedium'
  },
  footerContainer: {
    marginTop: -10,
    marginBottom: 20
  },
  footerText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 10,
    textAlign: 'center'
  }
})