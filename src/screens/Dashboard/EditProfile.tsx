import { View, Text, useWindowDimensions, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { IEditProfileState } from '../../typings/interfaces';

export default function EditProfile() {
  const { width } = useWindowDimensions();
  const WIDTH = (90 / 100) * width;
  const [profile, setProfile] = useState<IEditProfileState>({
    email: '',
    nameOrNick: ''
  });
  console.log(profile)

  return (
    <>
      <StatusBar />
      <View style={style.container}>

        <View style={[style.appWidthContainer, { width: WIDTH }]}>

          <View style={style.textInputContainer}>
            <View style={style.inputContainer}>
              <Text style={style.textLabel}>Email</Text>
              <TextInput
                placeholder='Enter email address'
                inputMode='email'
                onChangeText={text => setProfile(prev => ({ ...prev, email: text }))}
                style={[style.textInput, { width: (80 / 100) * width, }]}
              />
            </View>

            <View style={style.inputContainer}>
              <Text style={style.textLabel}>Name or Nickname</Text>
              <TextInput
                placeholder='Enter name or nickname'
                onChangeText={text => setProfile(prev => ({ ...prev, nameOrNick: text }))}
                inputMode='text'
                style={[style.textInput, { width: (80 / 100) * width, }]}
              />
            </View>
          </View>

          <TouchableOpacity style={style.saveButton}>
            <Text style={style.saveButtonText}>Save</Text>
          </TouchableOpacity>

        </View>

      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  appWidthContainer: {
    flex: 1,
  },
  textInputContainer: {
    flex: 1,
    marginVertical: 20
  },
  inputContainer: {
    marginVertical: 10,
    height: 60,
    backgroundColor: '#FBFBFB',
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    justifyContent: 'center',
  },
  textLabel: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    position: 'absolute',
    left: 20,
    top: 10,
    color: '#F70000'
  },
  textInput: {
    left: 20,
    top: 7,
    fontFamily: 'PoppinsRegular',
  },
  saveButton: {
    backgroundColor: '#000',
    height: 50,
    justifyContent: 'center',
    borderRadius: 12,
    marginVertical: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 1,
  },
  saveButtonText: {
    fontFamily: 'PoppinsSemiBold',
    color: '#fff',
    textAlign: 'center'
  }
})