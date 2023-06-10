import React, { useEffect, useState } from 'react'
import { View, Text, useWindowDimensions, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';
import { MaterialIcons, AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'
import * as Application from 'expo-application';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppSelector } from '../../redux/app/hook';
import { viewProfile } from '../../redux/slices/accountSlice';
import AvatarSample from '../../assets/images/AvatarSample.png';
import KumaLibLogo from '../../assets/images/KumaLib_Logo.png'
import SuccessSign from '../../assets/images/undraw_Done_re_oak4.png'
import CustomModal from '../../components/CustomModal';



export default function Profile() {
  const nav = useNavigation<NavigationProp<ParamListBase>>();
  const { width } = useWindowDimensions();
  const WIDTH = (90 / 100) * width;
  const dispatch = useAppDispatch();
  const [modalToggle, setModalToggle] = useState({
    toggle: false,
    message: '',
    description: '',
    images: SuccessSign
  });
  const selectViewProfile = useAppSelector(state => state.account.viewProfile);

  useEffect(() => {
    dispatch(viewProfile())
  }, [])

  if (selectViewProfile.status !== 'ok') {
    return <View style={style.bookActivityIndicator}>
      <ActivityIndicator size="large" color="#F7A600" />
    </View>
  }

  const onPressLogout = async () => {
    try {
      await AsyncStorage.clear();
      setModalToggle((prev: any) => ({
        ...prev,
        toggle: true,
        message: 'Logout Successfully',
        description: 'you have been successfully logout.'
      }))
      setTimeout(() => nav.navigate('Home'), 2500)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <StatusBar />
      <CustomModal
        images={modalToggle.images}
        message={modalToggle.message}
        description={modalToggle.description}
        toggle={modalToggle.toggle}
        setToggle={setModalToggle}
      />
      <View style={style.container}>
        <View style={[style.screenWidthContainer, { width: WIDTH }]}>

          <View style={style.profileBannerContainer}>
            <View style={style.profileInfoContainer}>
              <View style={style.profileNameContainer}>
                <Text style={style.profileNameText}>{selectViewProfile.response?.user.name}</Text>
                <MaterialIcons name="verified" size={20} color="#fff" style={style.profileVerifiedIcon} />
              </View>
              <Text style={style.profileEmailText}>{selectViewProfile.response?.user.email}</Text>
            </View>
            <Image
              source={AvatarSample}
              style={style.profileAvatar}
            />
          </View>

          <View style={style.downloadContainer}>

            <View style={style.downloadTodayContainer}>
              <Text style={style.downloadTodayNumber}>{selectViewProfile.response?.user.downloads_today}</Text>
              <Text style={style.downloadTodayText}>Download Today</Text>
            </View>

            <View style={style.downloadLimitContainer}>
              <Text style={style.downloadLimitNumber}>{selectViewProfile.response?.user.downloads_limit}</Text>
              <Text style={style.downloadLimitText}>Download Limit</Text>
            </View>

          </View>

          <View style={style.settingTitleContainer}>

            <Text style={style.settingTitleText}>Settings</Text>

            <View style={style.settingContainer}>

              <View style={style.settingItemContainer}>
                <View style={style.settingIconNameContainer}>
                  <AntDesign name="setting" size={24} color="black" />
                  <Text style={style.settingNameText}>Edit Profile</Text>
                </View>
                <TouchableOpacity
                  onPress={() => nav.navigate('EditProfile', { email: selectViewProfile.response?.user.email, name: selectViewProfile.response?.user.name })}
                >
                  <MaterialIcons name="keyboard-arrow-right" size={28} color="black" style={{ opacity: 0.7 }} />
                </TouchableOpacity>
              </View>

              <View style={style.settingItemContainer}>
                <View style={style.settingIconNameContainer}>
                  <Feather name="lock" size={24} color="black" />
                  <Text style={style.settingNameText}>Change Password</Text>
                </View>
                <TouchableOpacity
                  onPress={() => nav.navigate('ChangePassword')}
                >
                  <MaterialIcons name="keyboard-arrow-right" size={28} color="black" style={{ opacity: 0.7 }} />
                </TouchableOpacity>
              </View>

              <View style={style.settingItemContainer}>
                <View style={style.settingIconNameContainer}>
                  <AntDesign name="meh" size={24} color="black" />
                  <Text style={style.settingNameText}>About Me</Text>
                </View>
                <TouchableOpacity
                  onPress={() => nav.navigate('AboutMe')}
                >
                  <MaterialIcons name="keyboard-arrow-right" size={28} color="black" style={{ opacity: 0.7 }} />
                </TouchableOpacity>
              </View>

              <View style={style.settingItemContainer}>
                <View style={style.settingIconNameContainer}>
                  <SimpleLineIcons name="logout" size={24} color="black" />
                  <Text style={style.settingNameText}>Logout</Text>
                </View>
                <TouchableOpacity
                  onPress={onPressLogout}
                >
                  <MaterialIcons name="keyboard-arrow-right" size={28} color="black" style={{ opacity: 0.7 }} />
                </TouchableOpacity>
              </View>

            </View>

          </View>

          <View style={style.footerContainer}>
            <Image
              source={KumaLibLogo}
              style={style.footerLogo}
            />
            <Text style={style.footerVersionText}>version {Application.nativeApplicationVersion}</Text>
          </View>

        </View>
      </View >
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  screenWidthContainer: {
    flex: 1
  },
  profileBannerContainer: {
    backgroundColor: '#A61B2B',
    alignItems: 'center',
    height: 120,
    borderRadius: 12
  },
  profileInfoContainer: {
    marginVertical: 10
  },
  profileNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileNameText: {
    fontFamily: 'PoppinsBold',
    fontSize: 16,
    textAlign: 'center',
    color: '#fff'
  },
  profileVerifiedIcon: {
    left: 5
  },
  profileEmailText: {
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
  },
  profileAvatar: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    position: 'absolute',
    borderRadius: 100,
    top: 70,
    backgroundColor: '#fff',
    borderWidth: 5,
    borderColor: '#F7A600'
  },
  downloadContainer: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  downloadTodayContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  downloadTodayNumber: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'PoppinsSemiBold'
  },
  downloadTodayText: {
    textAlign: 'center',
    fontFamily: 'PoppinsMedium'
  },
  downloadLimitContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  downloadLimitNumber: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'PoppinsSemiBold'
  },
  downloadLimitText: {
    textAlign: 'center',
    fontFamily: 'PoppinsMedium'
  },
  settingTitleContainer: {
    marginTop: 50,
  },
  settingTitleText: {
    fontSize: 14,
    fontFamily: 'PoppinsSemiBold'
  },
  settingContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    justifyContent: 'center',
    padding: 15
  },
  settingItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  settingIconNameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  settingNameText: {
    left: 5,
    fontFamily: 'PoppinsRegular',
    fontSize: 14
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  footerLogo: {
    resizeMode: 'contain',
    width: 90,
    height: 20,
  },
  footerVersionText: {
    fontFamily: 'PoppinsRegular',
    fontSize: 10,
    opacity: 0.5
  },
  bookActivityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})