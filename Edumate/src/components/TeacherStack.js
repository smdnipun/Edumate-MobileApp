import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import { Button, Text } from 'react-native'
import { colors } from '../constants/styles'
import { UploadLink } from '../screens/Teacher/UploadLink'
import { UploadNote } from '../screens/Teacher/UploadNote'
import { UpdateLink } from '../screens/Teacher/UpdateLink'
import { UpdateNote } from '../screens/Teacher/UpdateNote'
import { Comment } from '../screens/Teacher/Comments'
import { TeacherDash } from '../screens/Teacher/TeacherDash'
import { PaperMarking } from '../screens/Teacher/PaperMarking'
import { Answers } from '../screens/Teacher/Answers'
const { tertiary, primary } = colors

const Stack = createNativeStackNavigator()

export const TeacherStack = () => {
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
            name='TeacherDash'
            component={TeacherDash}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='UploadLink'
            component={UploadLink}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='UploadNote'
            component={UploadNote}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name='UpdateLink' component={UpdateLink} options={{}} />
          <Stack.Screen
            name='UpdateNote'
            component={UpdateNote}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Comments'
            component={Comment}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='PaperMarking'
            component={PaperMarking}
            options={{}}
          />
          <Stack.Screen
            name='Answer'
            component={Answers}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
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
