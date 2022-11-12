import React from 'react'
import { RootStack } from './src/components/RootStack'
import { TeacherStack } from './src/components/TeacherStack'
import FirstSrn from './src/screens/Common/FirstSrn'
import { Login } from './src/screens/Common/Login'
import { UploadLink } from './src/screens/Teacher/UploadLink'
import { StudentSubject } from './src/screens/student/StudentSubject'
import { StudentNotes } from './src/screens/student/StudentNotes'
import { StudentFeedback } from './src/screens/student/StudentFeedback'
import { StudentComment } from './src/screens/student/StudentComment'
import { StduentAnswerSheetUpload } from './src/screens/student/StduentAnswerSheetUpload'
import UpdateProfile from './src/screens/Common/UpdateProfile'
import { UpdateLink } from './src/screens/Teacher/UpdateLink'

export default function App() {
  return (
    // <NavigationContainer style={styles.container}>
    //   {/* <Image
    //     source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
    //     style={styles.logo}
    //   />
    //   <Text style={styles.instructions}>
    //     To share a photo from your phone with a friend, just press the button
    //     below!
    //   </Text> */}
    //   <FirstSrn />
    //   <StatusBar style='auto' />
    // </NavigationContainer>
    <UploadNote/>

  )
}

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
