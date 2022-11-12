import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Home } from './src/screens/student/Home'
import { RootStack } from './src/components/RootStack'
import { UploadLink } from './src/screens/Teacher/UploadLink'
import { StudentSubject } from './src/screens/student/StudentSubject'
import { StudentNotes } from './src/screens/student/StudentNotes'
import { StudentFeedback } from './src/screens/student/StudentFeedback'
import { StudentComment } from './src/screens/student/StudentComment'
import { StduentAnswerSheetUpload } from './src/screens/student/StduentAnswerSheetUpload'
import { StudentExamTimeTable } from './src/screens/student/StudentExamTimeTable'
import { StudentStack } from './src/components/StudentStack'


export default function App() {
  return (
    // <Title/>
    // <Home/>
    <StudentStack/>
    // <StudentSubject/>
    // <StudentNotes/>
    // <StudentFeedback/>
    // <StudentComment/>
    // <StudentExamTimeTable/>
// <RootStack /> 
    // <StduentAnswerSheetUpload/> 
    // <Upload/>

  )}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 305,
//     height: 159,
//     marginBottom: 10,
//   },
//   instructions: {
//     color: '#888',
//     fontSize: 18,
//     marginHorizontal: 15,
//   },
// })
