import { View, Text, Image, useWindowDimensions, TouchableOpacity, ScrollView, StyleSheet, Linking, Alert } from 'react-native'
import React, { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { MaterialCommunityIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import KumaTechLogo from '../../assets/images/kumatechLogo.png'
import socMedLink from '../../constant/devSocMed';


export default function AboutMe() {
  const { width } = useWindowDimensions();
  const WIDTH = (90 / 100) * width;
  const openLink = useCallback(async (link: string) => {
    const supported = await Linking.canOpenURL(link);
    if (supported) {
      await Linking.openURL(link);
    } else {
      Alert.alert(`URL not supported: ${link}`);
    }
  }, []);


  return (
    <>
      <StatusBar style='light' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.container}
      >

        <View style={style.profileImageContainer}>

          <Image
            source={require('../../assets/images/jkrmarmol.jpg')}
            style={[style.profileImage, { width }]}
          />

          <View style={style.socialMediaContainer}>

            <TouchableOpacity onPress={() => openLink(socMedLink.email)}>
              <MaterialCommunityIcons name="email-outline" size={24} color="#fff" style={style.socialMediaItems} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(socMedLink.facebook)}>
              <FontAwesome name="facebook" size={24} color="#fff" style={style.socialMediaItems} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(socMedLink.linkedin)}>
              <FontAwesome name="linkedin" size={24} color="#fff" style={style.socialMediaItems} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink(socMedLink.github)}>
              <FontAwesome name="github" size={24} color="#fff" style={style.socialMediaItems} />
            </TouchableOpacity>

          </View>

        </View>

        <View style={[style.informationContainer, { width: WIDTH }]}>

          <View style={style.nameTitlePlaceContainer}>

            <Text style={style.nameText}>Kurt Russelle Marmol</Text>
            <Text style={style.titleText}>Full-Stack Engineer</Text>

            <View style={style.placeContainer}>
              <Entypo name="location-pin" size={24} color="black" style={{ opacity: 0.7 }} />
              <Text style={style.placeText}>Marikina City, Philippines</Text>
            </View>

            <Text style={style.profileDevDescription}>Want to bring your app idea to life? As a developer, I specialize in crafting high-performance applications. Let's build something amazing together!</Text>
          </View>

          <View style={style.orContainer}>
            <View style={style.horizontalLine} />
            <Text style={style.orText}>OR</Text>
            <View style={style.horizontalLine} />
          </View>

          <View style={style.devGroupContainer}>

            <View style={style.kumaTechContainer}>
              <Image
                source={KumaTechLogo}
                style={style.kumaTechImage}
              />
              <View>
                <Text style={style.kumaTechName}>KumaTech Developers</Text>
                <Text style={style.kumaTechSocMed}>fb.com/KumaTechDevelopers</Text>
              </View>
            </View>

            <Text style={style.kumaTechServiceText}>
              Looking for a team that delivers results? Our collaborative group of developers, designers, and pentester will work tirelessly to create a standout product that exceeds your business goals.
            </Text>
          </View>

          <View style={style.footerContainer}>
            <Text style={style.footerText}>Designed and Developed by Kurt Russelle Marmol</Text>
          </View>

        </View>

      </ScrollView>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    flex: 1
  },
  profileImageContainer: {
    backgroundColor: '#000',
    alignSelf: 'center',
  },
  profileImage: {
    resizeMode: 'contain',
    height: 470
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    position: 'absolute',
    bottom: 7,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  socialMediaItems: {
    marginHorizontal: 15
  },
  informationContainer: {
    alignSelf: 'center',
    flex: 1
  },
  nameTitlePlaceContainer: {
    marginVertical: 70
  },
  nameText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 16,
    color: '#A61B2B',
    marginBottom: -7
  },
  titleText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 24,
  },
  placeContainer: {
    flexDirection: 'row', alignItems: 'center', marginTop: -7
  },
  placeText: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
    opacity: 0.7,
  },
  profileDevDescription: {
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    opacity: 0.7,
    marginTop: 20,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
  },
  orText: {
    marginHorizontal: 5,
    fontFamily: 'PoppinsMedium'
  },
  devGroupContainer: {
    marginVertical: 70
  },
  kumaTechContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  kumaTechImage: {
    resizeMode: 'contain',
    width: 90,
    height: 90
  },
  kumaTechName: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 20,
  },
  kumaTechSocMed: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 12,
    opacity: 0.7,
    marginTop: -10
  },
  kumaTechServiceText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 14,
    opacity: 0.7,
    marginTop: 20,
  },
  footerContainer: {
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 10,
    fontFamily: 'PoppinsRegular'
  }
})