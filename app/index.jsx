import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { Link} from 'expo-router'

export default class RootLayout extends Component {
  render() {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-pblack ">Aura!</Text>
        <StatusBar style='auto' />
        <Link href="/home">Go Home</Link>
      </View>
    )
  }
}
