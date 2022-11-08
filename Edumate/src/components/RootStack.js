import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, Text } from 'react-native'
import FirstSrn from '../screens/Common/FirstSrn'
import Login from '../screens/Common/Login'
import SignUp from '../screens/Common/SignUp'

const Stack = createNativeStackNavigator()

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.screen
          name='LoadingPage'
          component={FirstSrn}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SingUp' component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
    />
  )
}
export const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>
}
