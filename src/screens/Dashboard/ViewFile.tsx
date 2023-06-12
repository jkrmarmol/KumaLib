import { SERVER_API } from '@env'
import { StatusBar, SafeAreaView } from 'react-native'
import { WebView } from 'react-native-webview'
import React from 'react'

export default function ViewFile({ route }: any) {
  const { id } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <WebView
        source={{ uri: `${SERVER_API}/ireader/${id}` }}
        style={{}}
      />
    </SafeAreaView>
  )
}