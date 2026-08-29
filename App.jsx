import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack =createNativeStackNavigator()

const StackNavigator=()=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Profile' component={Profile}/>
      <Stack.Screen name='Search' component={Search}/>
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
