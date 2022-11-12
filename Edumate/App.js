import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import Title from './src/screens/test'
import { Adminhome } from './src/screens/admin/Adminhome'
import { AddStreams } from './src/screens/admin/AddStreams'
import { AddSubjects } from './src/screens/admin/AddSubjects'
import {
  HomeScreen,
  ProfileScreen,
  RootStack,
} from './src/components/RootStack'
import FirstSrn from './src/screens/Common/FirstSrn'
import { Login } from './src/screens/Common/Login'
import { AddExams } from './src/screens/admin/AddExams'
import { Exams } from './src/screens/admin/Exams'
import { Subjects } from './src/screens/admin/Subjects'
import { Streams } from './src/screens/admin/Streams'

export default function App() {
  return (
    // <View style={styles.container}>s
    //   <Image
    //     source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
    //     style={styles.logo}
    //   />
    //   <Title/>
    //   <Text style={styles.instructions}>
    //     To share a photo from your phone with a friend, just press the button
    //     below!
    //   </Text>
    //   <StatusBar style='auto' />
    // </View>
    <Exams/>
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
