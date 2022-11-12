import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Home } from './src/screens/student/Home'
import Title from './src/screens/test'
import {
  HomeScreen,
  ProfileScreen,
  RootStack,
} from './src/components/RootStack'
import FirstSrn from './src/screens/Common/FirstSrn'
import { Login } from './src/screens/Common/Login'
import { UploadLink } from './src/screens/Teacher/UploadLink'
import { StudentSubject } from './src/screens/student/StudentSubject'
import { StudentNotes } from './src/screens/student/StudentNotes'
import { StudentFeedback } from './src/screens/student/StudentFeedback'
import { StudentComment } from './src/screens/student/StudentComment'
import { StduentAnswerSheetUpload } from './src/screens/student/StduentAnswerSheetUpload'
import { Upload } from './src/screens/student/Upload'

export default function App() {
  return (
    // <Title/>
    // <Home/>
    // <StudentSubject/>
    // <StudentNotes/>
    // <StudentFeedback/>
    // <StudentComment/>
    <StduentAnswerSheetUpload/>
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
