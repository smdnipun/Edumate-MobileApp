import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  colors,
  StyledButtoWhite,
  ButtonTextWhite,
  ProfileInnerContainer,
  StyledButton,
  ButtonText,
} from '../../constants/styles'
import { StatusBar } from 'expo-status-bar'
import axios from 'axios'
const { primary, black } = colors

export default function Profile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')
  const [role, setRole] = useState('')
  const [stream, setStream] = useState('')
  const [id, setId] = useState('')
  AsyncStorage.getItem('user').then((value) => {
    setId(value)
  })
  console.log(id)
  useEffect(() => {
    loadData()
  }, [])
  const loadData = async () => {
    await axios
      .get(`https://edumate-backend.herokuapp.com/api/users/${id}`)
      .then((res) => {
        const name = res.data.firstName + ' ' + res.data.lastName
        setName(name)
        setEmail(res.data.email)
        setDob(res.data.dateOfBirth)
        setRole(res.data.type)
        setStream(res.data.stream)
      })
  }

  const deleteProfile = async () => {
    await axios
      .delete(`https://edumate-backend.herokuapp.com/api/users/${id}`)
      .then(() => {
        alert('Profile Successfully deleted')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <View style={styles.page}>
        <StatusBar style='dark' />
        <ProfileInnerContainer>
          <Image
            source={require('../../../assets/Teacher.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={{ fontSize: 35 }}>
            {name == '' ? 'John Smith' : name}
          </Text>
        </ProfileInnerContainer>
        <View style={styles.outterView}>
          <View style={{ margin: 5, marginBottom: 40 }}>
            <View style={styles.tagOuterView}>
              <View style={styles.tagInnerView}>
                <Text style={styles.label}>Email : </Text>
              </View>
              <View>
                <Text style={styles.details}>
                  {email == '' ? 'smdnipun@gmail.com' : email}
                </Text>
              </View>
            </View>
            <View style={styles.tagOuterView}>
              <View style={styles.tagInnerView}>
                <Text style={styles.label}>Date of Birth : </Text>
              </View>
              <View style={styles.tagInnerView}>
                <Text style={styles.label}>{dob == '' ? '-' : dob}</Text>
              </View>
            </View>
            <View style={styles.tagOuterView}>
              <View style={styles.tagInnerView}>
                <Text style={styles.label}>Role : </Text>
              </View>
              <View style={styles.tagInnerView}>
                <Text style={styles.label}>
                  {role == '' ? 'Student' : role}
                </Text>
              </View>
            </View>
            <View style={styles.tagOuterView}>
              <View style={styles.tagInnerView}>
                <Text style={styles.label}>Stream : </Text>
              </View>
              <View style={styles.tagInnerView}>
                <Text style={styles.label}>
                  {stream == '' ? 'Combined Maths' : stream}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.tagOuterView}>
            <View style={styles.tagInnerView}>
              <StyledButtoWhite onPress={() => {}}>
                <ButtonTextWhite>Update Details</ButtonTextWhite>
              </StyledButtoWhite>
            </View>
            <View style={styles.tagInnerView}>
              <StyledButtoWhite onPress={() => {}}>
                <ButtonTextWhite>Reset Password</ButtonTextWhite>
              </StyledButtoWhite>
            </View>
          </View>
          <StyledButton onPress={deleteProfile}>
            <ButtonText>Delete Profile</ButtonText>
          </StyledButton>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  innerContainer: {
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    padding: 15,
    paddingTop: 80,
    backgroundColor: primary,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
  outterView: {
    flex: 1,
    marginTop: 10,
    margin: 10,
  },
  label: {
    fontSize: 18,
  },
  details: {
    fontSize: 18,
    textAlign: 'center',
  },
  tagOuterView: {
    marginTop: 30,
    flexDirection: 'row',
  },
  tagInnerView: {
    flex: 1,
  },
})
