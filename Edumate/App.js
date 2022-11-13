import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Home } from './src/screens/student/Home'
import { RootStack } from './src/components/RootStack'
import { StudentSubject } from './src/screens/student/StudentSubject'
import { StudentNotes } from './src/screens/student/StudentNotes'
import { StudentFeedback } from './src/screens/student/StudentFeedback'
import { StudentComment } from './src/screens/student/StudentComment'
import { StduentAnswerSheetUpload } from './src/screens/student/StduentAnswerSheetUpload'
import { Adminhome } from './src/screens/admin/Adminhome'
import { AdminStack } from './src/components/AdminStack'
import { AddSubjects } from './src/screens/admin/AddSubjects'
import { StudentExamTimeTable } from './src/screens/student/StudentExamTimeTable'
import { StudentStack } from './src/components/StudentStack'

export default function App() {
  return (
    // <Title/>
    // <Home/>
    // <StudentStack/>
    // <StudentSubject/>
    // <StudentNotes/>
    // <StudentFeedback/>
    // <StudentComment/>
    // <StudentExamTimeTable/>
    <RootStack /> 
    // <StduentAnswerSheetUpload/> 
    // <Upload/>

  )}

