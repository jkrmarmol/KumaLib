import React, { useState } from 'react'
import { View, Text, useWindowDimensions, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import type { IChangePasswordState } from '../../typings/interfaces';
import CustomModal from '../../components/CustomModal';
import ErrorSign from '../../assets/images/undraw_access_denied_re_awnf.png'
import SuccessSign from '../../assets/images/undraw_Done_re_oak4.png'
import { useAppDispatch } from '../../redux/app/hook';
import { updatePassword } from '../../redux/slices/accountSlice';

export default function ChangePassword() {
  const { width } = useWindowDimensions();
  const WIDTH = (90 / 100) * width;
  const dispatch = useAppDispatch();
  const [modalToggle, setModalToggle] = useState(false);
  const [modalMessage, setMessage] = useState({
    message: '',
    description: '',
    images: ErrorSign
  });
  const [password, setPassword] = useState<IChangePasswordState>({
    newPassword: '',
    confirmPassword: ''
  });

  const onSubmitUpdatePassword = async () => {
    try {
      if (password.confirmPassword !== password.newPassword) {
        setModalToggle(true);
        setMessage({ message: 'password not match', description: 'please check password and new password.', images: ErrorSign })
      }
      if (password.confirmPassword === password.newPassword) {
        const { payload } = await dispatch(updatePassword({ password: password.newPassword }));
        if (payload.success === 0) {
          setMessage({ message: 'Invalid Password', description: payload.error, images: ErrorSign })
          setModalToggle(true)
        }
        if (payload.success === 1) {
          setMessage({ message: 'Password Updated', description: 'you have successfully update your password', images: SuccessSign })
          setModalToggle(true)
        }
      }

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <StatusBar />
      <CustomModal
        images={modalMessage.images}
        toggle={modalToggle}
        setToggle={setModalToggle}
        message={modalMessage.message}
        description={modalMessage.description}
      />
      <View style={style.container}>

        <View style={[style.appWidthContainer, { width: WIDTH }]}>

          <View style={style.textInputContainer}>

            <View style={style.inputContainer}>
              <Text style={style.textLabel}>New password</Text>
              <TextInput
                secureTextEntry
                placeholder='Enter new password'
                onChangeText={text => setPassword(prev => ({
                  ...prev,
                  newPassword: text
                }))}
                style={[style.textInput, { width: (80 / 100) * width, }]}
              />
            </View>

            <View style={style.inputContainer}>
              <Text style={style.textLabel}>Confirm new password</Text>
              <TextInput
                secureTextEntry
                placeholder='Enter confirmation password'
                onChangeText={text => setPassword(prev => ({
                  ...prev,
                  confirmPassword: text
                }))}
                style={[style.textInput, { width: (80 / 100) * width, }]}
              />
            </View>

          </View>

          <TouchableOpacity style={style.saveButton} onPress={onSubmitUpdatePassword}>
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