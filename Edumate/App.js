import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import {
  HomeScreen,
  ProfileScreen,
  RootStack,
} from './src/components/RootStack'
import FirstSrn from './src/screens/Common/FirstSrn'
import { Login } from './src/screens/Common/Login'
import { TeacherDash } from './src/screens/Teacher/TeacherDash'
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
    <UploadLink/>
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
