import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Adminhome } from '../screens/admin/Adminhome'
import { Streams } from '../screens/admin/Streams'
import { Subjects } from '../screens/admin/Subjects'
import { Exams } from '../screens/admin/Exams'
import { UpdateExam } from '../screens/admin/UpdateExam'
import { UpdateStream } from '../screens/admin/UpdateStream'
import { UpdateSubject } from '../screens/admin/UpdateSubject'

const Stack = createNativeStackNavigator()

export const AdminStack = () => {
    return (
        <>
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
              name='Adminhome'
              component={Adminhome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name='UpdateSubject' component={UpdateSubject} />
            <Stack.Screen name='UpdateStream' component={UpdateStream} />
            <Stack.Screen name='UpdateExam' component={UpdateExam} />
            <Stack.Screen name='getstreams'component={Streams} options={{headerShown: false,}}/>
            <Stack.Screen name='getsubjects' component={Subjects} />
            <Stack.Screen name='getexams' component={Exams} />       
          </Stack.Navigator>
        </>
      )
}
