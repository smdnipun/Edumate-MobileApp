import React, { useEffect, useState } from 'react'
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native'
import axios from 'axios'
import { Input } from '../../constants/InputField'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  StyledTextInput,
  colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  StyledButtoWhite,
  ButtonTextWhite,
  UploadButton,
  UploadingButton,
  DiscoverTitle,
  DiscoverText,
  DashButton,
  TeacherCardColumn,
  TeacherDashContent,
  TeacherDashContentButton,
  TeacherCardRow,
  TeacherCard,
} from '../../constants/styles.js'
import { StatusBar } from 'expo-status-bar'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

const { brand, darkLight, primary } = colors

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000'

export const Answers = () => {
  const [subject, setSubject] = useState('')
  const [lesson_name, setLesson] = useState('')
  const [grade, setGrade] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [link, setLink] = useState('')
  const [teacher_id, setTeacher] = useState('')

  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')

  const onChangeHandler = () => {
    const data = {
      email,
      password,
    }

    const url = `https://edumate-backend.herokuapp.com/link/add`
    axios.post(url, data).then((res) => {
      console.log('done')
    })
  }

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `
    return status + message
  }

  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <PageTitle>Answers</PageTitle>
      <InnerContainer>
        <View>
          <TeacherCard>
            <TeacherCardRow>
              <TeacherCardColumn>
                <TeacherDashContent>Subect</TeacherDashContent>
                <TeacherDashContent>Grade</TeacherDashContent>
                <TeacherDashContent>Student Id</TeacherDashContent>
              </TeacherCardColumn>
              <TeacherCardColumn>
                <TeacherDashContentButton>
                  <Octicons size={20} color={darkLight} name='pencil' />
                </TeacherDashContentButton>
                <TeacherDashContentButton>
                  <Octicons size={20} color={darkLight} name='trash' />
                </TeacherDashContentButton>
              </TeacherCardColumn>
            </TeacherCardRow>
          </TeacherCard>

          <View></View>
        </View>
      </InnerContainer>
    </StyledContainer>
  )
}
