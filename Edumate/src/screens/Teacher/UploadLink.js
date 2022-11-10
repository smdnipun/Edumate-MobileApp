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
} from '../../constants/styles.js'
import { StatusBar } from 'expo-status-bar'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

const { brand, darkLight, primary } = colors

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000'

export const UploadLink = () => {
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
      <PageTitle>Upload Link</PageTitle>
      <InnerContainer>
        <View>
          <View>
            <InputCd
              placeholder='Subject'
              placeholderTextColor={darkLight}
              // onChangeText={}
              value={subject}
            />
            <InputCd
              placeholder='Lesson name'
              placeholderTextColor={darkLight}
              value={lesson_name}
            />
            <InputCd
              type='number'
              placeholder='Grade'
              placeholderTextColor={darkLight}
              value={grade}
              keyboardType='numeric'
            />
            <InputCd
              type='date'
              icon='calendar'
              placeholder='Date'
              placeholderTextColor={darkLight}
              value={date}
            />
            <InputCd
              type='time'
              icon='clock'
              placeholder='Time'
              placeholderTextColor={darkLight}
              value={time}
            />
            <InputCd
              icon='link'
              placeholder='Link'
              placeholderTextColor={darkLight}
              value={link}
            />
            <StyledButton>
              <ButtonText>Upload</ButtonText>
            </StyledButton>
          </View>
        </View>
      </InnerContainer>
    </StyledContainer>
  )
}

export const InputCd = ({ label, icon, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      <RightIcon>
        <Octicons name={icon} size={30} color={brand} />
      </RightIcon>
    </View>
  )
}
