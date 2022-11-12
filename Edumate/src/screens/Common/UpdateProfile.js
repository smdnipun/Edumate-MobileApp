import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  colors,
  StyledTextInputField,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  MsgBox,
} from '../../constants/styles'
import ProfileUpper from './ProfileUpper'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
const { darkLight, black } = colors

var userId = ''
AsyncStorage.getItem('user').then((value) => {
  userId = value
})

export default function UpdateProfile({navigation}) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState()

  const [message, setMessage] = useState()
  const [messageType, setMessageType] = useState()

  useEffect(() => {
    loadData()
  }, [])
  const loadData = async () => {
    await axios
      .get(`https://edumate-backend.herokuapp.com/api/users/${userId}`)
      .then((res) => {
        setFirstName(res.data.firstName)
        setLastName(res.data.lastName)
        setEmail(res.data.email)
        setDob(res.data.dateOfBirth)
      })
  }

  const handleSubmit = async () => {
    handleMessage(null)
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      dob: dob,
    }
    if (data.firstName == '' || data.lastName == '' || data.email == '') {
      handleMessage('Please fill all the fields', 'FAILED')
    } else {
      await axios
        .put(`https://edumate-backend.herokuapp.com/api/users/${userId}`, data)
        .then((res) => {
          alert('Profile successfully updated')
          navigation.navigate("Profile")
        })
        .catch((err) => {
          console.log(err)
          handleMessage('An error occured. Please try again!')
        })
    }
  }

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message)
    setMessageType(type)
  }

  return (
    <ScrollView>
      <View style={styles.page}>
        <ProfileUpper />
        <View>
          <Text style={styles.header}>Update Account</Text>
          <View style={styles.formView}>
            <View style={styles.spacing}>
              <StyledInputLabel>First Name</StyledInputLabel>
              <StyledTextInputField
                placeholder='First Name'
                placeholderTextColor={darkLight}
                onChangeText={(firstName) => setFirstName(firstName)}
                value={firstName}
              />
            </View>
            <View style={styles.spacing}>
              <StyledInputLabel>Last Name</StyledInputLabel>
              <StyledTextInputField
                placeholder='Last Name'
                placeholderTextColor={darkLight}
                onChangeText={(lastName) => setLastName(lastName)}
                value={lastName}
              />
            </View>
            <View style={styles.spacing}>
              <StyledInputLabel>Email</StyledInputLabel>
              <StyledTextInputField
                placeholder='Email'
                placeholderTextColor={darkLight}
                onChangeText={(email) => setEmail(email)}
                value={email}
              />
            </View>
            <View style={styles.spacing}>
              <StyledInputLabel>Date Of Birth</StyledInputLabel>
              <StyledTextInputField
                placeholder='Date Of Birth'
                placeholderTextColor={darkLight}
                onChangeText={(dob) => setDob(dob)}
                value={dob}
              />
            </View>
            <MsgBox type={messageType}>{message}</MsgBox>
            <StyledButton onPress={handleSubmit}>
              <ButtonText>Save Changes</ButtonText>
            </StyledButton>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    marginStart: 15,
    marginTop: 8,
    fontSize: 30,
    color: black,
  },
  page: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 120,
    width: 120,
    resizeMode: 'stretch',
  },
  label: {
    fontSize: 16,
    marginTop: 2,
  },
  formView: {
    marginTop: 10,
    margin: 10,
  },
  spacing: {
    marginTop: 0,
    margin: 5,
  },
})
