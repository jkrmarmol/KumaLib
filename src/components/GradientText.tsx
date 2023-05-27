import { Text } from 'react-native'
import React from 'react'
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

const GradientText = (props: any) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#F70000', '#F7A600']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Text {...props} style={[props.style, {
          opacity: 0
        }]} />
      </LinearGradient>
    </MaskedView>
  )
}

export default GradientText