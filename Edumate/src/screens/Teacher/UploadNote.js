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
} from '../../constants/styles.js'
import { StatusBar } from 'expo-status-bar'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

const { brand, darkLight, primary } = colors

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000'

export const UploadNote = () => {
  const [subject, setSubject] = useState('')
  const [lesson_name, setLesson] = useState('')
  const [grade, setGrade] = useState('')
  const [note, setNote] = useState('')
  const [teacher_id, setTeacher] = useState('')

  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')

  const userId='123465'
  const formData = new FormData()

    const noteAdd = (e) => {
      setNote(e.target.files[0])
    }

  formData.append('lesson_name', lesson_name)
  formData.append('file', note)
  formData.append('subject', subject)
  formData.append('grade', grade)
  formData.append('teacher_id', userId)


  console.log(formData)
  const onChangeHandler = () => {
    const url = `https://edumate-backend.herokuapp.com/teacherNote/add`
    axios.post(url, formData).then((res) => {
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
      <PageTitle>Upload Note</PageTitle>
      <InnerContainer>
        <View>
          <View>
            <InputCd
              placeholder='Subject'
              placeholderTextColor={darkLight}
              name='subject'
              // onChangeText={}
              onChangeText={(subect) => setSubject(subect)}
              value={subject}
            />
            <InputCd
              placeholder='Lesson name'
              placeholderTextColor={darkLight}
              name='lesson_name'
              onChangeText={(lesson_name) => setLesson(lesson_name)}
              value={lesson_name}
            />
            <InputCd
              type='number'
              placeholder='Grade'
              name='grade'
              placeholderTextColor={darkLight}
              value={grade}
              onChangeText={(grade) => setGrade(grade)}
              keyboardType='numeric'
            />
            <File>
             
               filename='file' onChange={noteAdd}
              className='form-input'
            </File>
            <StyledButton onPress={onChangeHandler}>
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
