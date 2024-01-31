import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import "react-native-gesture-handler"
import Danhsach from './src/Danhsach'
import Them from './src/Them'
import Thongbao from './src/Thongbao'

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Danhsach'>
        <Stack.Screen component={Danhsach} name='Danhsach' options={{headerShown: false}}/>
        <Stack.Screen component={Thongbao} name='Thongbao' options={{headerShown: false}}/>
        <Stack.Screen component={Them} name = 'Them' options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App