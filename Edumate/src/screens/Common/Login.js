import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React, { useState, useContext } from 'react'
import {
  StyledContainer,
  colors,
  StyledButton,
  ButtonText,
  ExtraView,
  TextLinkContent,
  TextLink,
  ExtraText,
  StyledTextInputField,
  StyledInputLabel,
  MsgBox,
} from '../../constants/styles'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const { darkLight, black } = colors

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [message, setMessage] = useState()
  const [messageType, setMessageType] = useState()

  const handleSubmit = async (e) => {
    const credentials = {
      email: email,
      password: password,
    }

    if (credentials.email == '' || credentials.password == '') {
      alert('Please fill all the details!!!')
    } else {
      await axios
        .post(
          'https://edumate-backend.herokuapp.com/api/auth/login',
          credentials
        )
        .then(async (res) => {
          const result = res.data.details
          await AsyncStorage.setItem('user', result._id)
          if (result.type == 'student' || result.type == 'Student') {
            navigation.navigate('Profile')
          } else if (result.type == 'teacher' || result.type == 'Teacher') {
            navigation.navigate('Profile')
          } else {
            alert('Please try again!!!')
          }
        })
    }
  }

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message)
    setMessageType(type)
  }

  return (
    <>
      <StyledContainer>
        <StatusBar style='dark' />
        <Text style={styles.header}>Login</Text>
        <View style={styles.inputFieldView}>
          <MsgBox type={messageType}>{message}</MsgBox>
          <View style={styles.spacing}>
            <StyledInputLabel>Email</StyledInputLabel>
            <StyledTextInputField
              id='email'
              placeholder='example@edumate.com'
              placeholderTextColor={darkLight}
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </View>
          <View style={styles.spacing}>
            <StyledInputLabel>Password</StyledInputLabel>
            <StyledTextInputField
              id='password'
              secureTextEntry={true}
              placeholder='* * * * * * *'
              placeholderTextColor={darkLight}
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
          </View>
          <Text style={styles.alignRight}>Forgot Password?</Text>
          <StyledButton onPress={handleSubmit}>
            <ButtonText>Login</ButtonText>
          </StyledButton>
          <ExtraView>
            <ExtraText>Don't have an account? </ExtraText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LoadingPage')
              }}
            >
              <TextLinkContent>SignUp</TextLinkContent>
            </TouchableOpacity>
          </ExtraView>
        </View>
      </StyledContainer>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    marginStart: 15,
    fontSize: 40,
    fontWeight: '10px',
    color: black,
  },
  inputFieldView: {
    marginTop: 50,
    margin: 10,
  },
  spacing: {
    marginTop: 15,
    margin: 5,
  },
  alignRight: {
    textAlign: 'right',
    margin: 10,
  },
  alignCenter: {
    textAlign: 'center',
    margin: 15,
  },
})
