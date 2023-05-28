import React, { useState } from 'react';
import { View, Text, useWindowDimensions, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar'
import SocMedAuth from '../components/SocMedAuth'


export default function SignUp() {
  const { width } = useWindowDimensions();
  const WIDTH = (85 / 100) * width;
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <StatusBar />
      <View style={style.container}>

        <View style={[style.signInContainer, { width: WIDTH }]}>

          <Text style={style.signInText}>Sign Up</Text>

          <Text style={style.signInDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

        </View >

        <View style={[style.inputContainer, { width }]}>

          <View style={{ width: WIDTH }}>

            <View style={[style.emailPasswordContainer, { marginVertical: 40 }]}>

              <View style={[style.emailContainer, style.shadowEffect]}>
                <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                <TextInput
                  placeholder='Email'
                  inputMode='email'
                  style={[style.textInput, { width: (60 / 100) * width }]}
                />
              </View>

              <View style={[style.passwordContainer, style.shadowEffect]}>

                <View style={style.iconTextContainer}>
                  <MaterialIcons name="lock-outline" size={24} color="black" />
                  <TextInput
                    placeholder='Password'
                    secureTextEntry={showPassword}
                    style={[style.textInput, { width: (60 / 100) * width }]}
                  />
                </View>

                {showPassword ? <Entypo
                  name="eye-with-line" size={24}
                  color="#00000050"
                  onPress={() => setShowPassword(false)}
                /> : <Entypo
                  name="eye"
                  size={24}
                  color="#00000050"
                  onPress={() => setShowPassword(true)}
                />}

              </View>

              <Text style={style.forgotPasswordText}>Forgot Password?</Text>

            </View>

            <TouchableOpacity style={style.signUpTouchableOpacity}>
              <LinearGradient
                colors={['#F7A600', '#F70000']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={style.linearGradient}
              >
                <Text style={style.signUpText}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>


            <View style={style.orContinueWithContainer}>
              <View style={style.orContinueWithHorizontalLine} />
              <Text style={style.orContinueWithText}>Or sign up with</Text>
              <View style={style.orContinueWithHorizontalLine} />
            </View>

            <SocMedAuth />

          </View>

        </View>

      </View >
    </>
  )
}

const style = StyleSheet.create({
  shadowEffect: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7A600',
  },
  signInContainer: {
    marginBottom: 25
  },
  signInText: {
    fontSize: 40,
    fontFamily: 'PoppinsBold'
  },
  signInDescription: {
    fontSize: 14,
    fontFamily: 'PoppinsMedium'
  },
  inputContainer: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center'
  },
  emailPasswordContainer: {
    marginVertical: 40
  },
  emailContainer: {
    backgroundColor: '#EFEFEF',
    height: 50,
    paddingHorizontal: 12,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 18,
    alignItems: 'center',
  },
  passwordContainer: {
    backgroundColor: '#EFEFEF',
    height: 50,
    paddingHorizontal: 12,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgotPasswordText: {
    textAlign: 'right',
    fontFamily: 'PoppinsMedium',
    marginTop: 10
  },
  signUpTouchableOpacity: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    borderRadius: 16,
  },
  signUpText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    fontFamily: 'PoppinsMedium'
  },
  orContinueWithContainer: {
    flexDirection: 'row',
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orContinueWithHorizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1,
  },
  orContinueWithText: {
    marginHorizontal: 5,
    fontFamily: 'PoppinsMedium'
  },
  linearGradient: {
    borderRadius: 16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    left: 5,
    fontFamily: 'PoppinsRegular'
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})