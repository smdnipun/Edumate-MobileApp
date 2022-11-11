import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Button, Text } from 'react-native'
import Login from '../screens/Common/Login'
import FirstSrn from '../screens/Common/FirstSrn'
import { colors } from '../constants/styles'
import SignUp from '../screens/Common/SignUp'
import Profile from '../screens/Common/Profile'
const { tertiary, primary } = colors

const Stack = createNativeStackNavigator()

export const RootStack = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'transparent',
            },
            // headerTintColor: tertiary,
            headerTransparent: true,
            headerTitle: '',
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen
            name='LoadingPage'
            component={FirstSrn}
            // options={{ navigationBarHidden: true }}
          />
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='SingUp'
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Profile'
            component={Profile}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
