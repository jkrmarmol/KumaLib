import { TextInput, Text } from 'react-native'
import React from 'react'
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { useAppDispatch } from '../redux/app/hook';
import { searchBook } from '../redux/slices/searchSlice';

export default function GradientTextInput(props: any) {
  const dispatch = useAppDispatch();


  return (
    <MaskedView maskElement={
      <Text {...props} />
    }>
      <LinearGradient
        colors={['#F70000', '#F7A600']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <TextInput
          onChangeText={text => dispatch(searchBook(text))}
          {...props}
          style={[props.style, {
            opacity: 0,
          }]}
          placeholder='Enter keyword'
        />
      </LinearGradient>
    </MaskedView>
  )
}