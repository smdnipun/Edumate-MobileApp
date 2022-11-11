import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import {
  HomeScreen,
  ProfileScreen,
  RootStack,
} from './src/components/RootStack'
import { TeacherStack } from './src/components/TeacherStack'
import FirstSrn from './src/screens/Common/FirstSrn'
import { Login } from './src/screens/Common/Login'
import Profile from './src/screens/Common/Profile'
import ResetPassword from './src/screens/Common/ResetPassword'
import UpdateProfile from './src/screens/Common/UpdateProfile'
import { Answers } from './src/screens/Teacher/Answers'
import { TeacherDash } from './src/screens/Teacher/TeacherDash'
import { UpdateLink } from './src/screens/Teacher/UpdateLink'
import { UploadLink } from './src/screens/Teacher/UploadLink'
import { UploadNote } from './src/screens/Teacher/UploadNote'

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
    // <RootStack/>
    // <Profile />
    // <UpdateProfile/>
    <ResetPassword/>
    // <UploadLink/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
})
