import React from 'react';
import { View, Text, Modal, useWindowDimensions, Image, TouchableOpacity, StyleSheet } from 'react-native'
import type { IModalState } from '../typings/interfaces';


export default function CustomModal({ images, message, description, toggle, setToggle }: any) {
  const { width } = useWindowDimensions();
  const WIDTH = (80 / 100) * width;

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={toggle}
      statusBarTranslucent
    >

      <View style={style.container}>

        <View style={[style.modalContainer, { width: WIDTH }]}>

          <Image source={images} style={style.modalImage} />
          <Text style={style.modalMessage}>{message}</Text>
          <Text style={style.modalDescription}>{description}</Text>
          <TouchableOpacity
            onPress={() => setToggle((prev: IModalState) => ({
              ...prev,
              toggle: false
            }))}
            style={style.modalButtonContainer}
          >
            <Text style={style.modalButtonText}>Got it!</Text>
          </TouchableOpacity>
        </View>

      </View>

    </Modal>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20
  },
  modalImage: {
    resizeMode: 'contain',
    width: 260,
    height: 200,
    marginTop: 40
  },
  modalMessage: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 18,
    textAlign: 'center'
  },
  modalDescription: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 50
  },
  modalButtonContainer: {
    backgroundColor: '#F7A600',
    width: '100%',
    borderRadius: 12
  },
  modalButtonText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: 'PoppinsSemiBold'
  }
})