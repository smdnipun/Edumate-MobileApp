import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'
import {
  HomeScreen,
  ProfileScreen,
  RootStack,
} from './src/components/RootStack'
import AuthScreen from './src/screens/Common/Login'
import Title from './src/screens/test'

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      {/* <Image
        source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}
        style={styles.logo}
      />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text> */}

      {/* <HomeScreen /> */}
      <AuthScreen />
      <StatusBar style='auto' />
    </NavigationContainer>
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
