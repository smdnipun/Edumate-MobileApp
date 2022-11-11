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
import { Picker } from '@react-native-picker/picker'

const { brand, darkLight, primary } = colors

export const UploadLink = () => {
  const [subject, setSubject] = useState([])
  const [lesson_name, setLesson] = useState('')
  const [grade, setGrade] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [link, setLink] = useState('')
  const [teacher_id, setTeacher] = useState('')

  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')

  const data = {
    subject,
    lesson_name,
    grade,
    date,
    time,
    link,
    teacher_id: '515',
  }
 
  const userStream = 'Science'
  const loadSubject = () => {
    axios
      .post('https://edumate-backend.herokuapp.com/subject/stream', {
        streamname: userStream,
      })
      .then((res) => {
        setSubject(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    loadSubject()
  }, [])

  console.log(data)
  const onChangeHandler = () => {
    const url = `https://edumate-backend.herokuapp.com/link/add`
    axios.post(url, data).then((res) => {
      console.log('done')
      alert('Link added')
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
            <Picker
              selectedValue={grade}
              onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
            >
              {subject.map((sub) => {
                return (
                  <Picker.Item
                    label={sub.subjectname}
                    value={sub.subjectname}
                  />
                )
              })}
            </Picker>
            <InputCd
              placeholder='Lesson name'
              placeholderTextColor={darkLight}
              onChangeText={(lesson_name) => setLesson(lesson_name)}
              value={lesson_name}
            />
            <Picker
              selectedValue={grade}
              onValueChange={(itemValue, itemIndex) => setGrade(itemValue)}
            >
              <Picker.Item label='12 Grade' value={12} />
              <Picker.Item label='13 Grade' value={13} />
            </Picker>
            <InputCd
              type='date'
              icon='calendar'
              placeholder='Date'
              placeholderTextColor={darkLight}
              onChangeText={(date) => setDate(date)}
              value={date}
            />
            <InputCd
              type='time'
              icon='clock'
              placeholder='Time'
              placeholderTextColor={darkLight}
              onChangeText={(time) => setTime(time)}
              value={time}
            />
            <InputCd
              icon='link'
              placeholder='Link'
              placeholderTextColor={darkLight}
              onChangeText={(link) => setLink(link)}
              value={link}
            />
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
