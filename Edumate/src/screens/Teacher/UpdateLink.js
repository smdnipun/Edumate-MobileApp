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
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'

const { brand, darkLight, primary } = colors

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000'

export const UpdateLink = ({ route, navigation }) => {
  const [subject, setSubject] = useState('')
  const [lesson_name, setLesson] = useState('')
  const [grade, setGrade] = useState()
  const [date, setDate] = useState()
  const [d,setD]=useState(new Date())
  const [time, setTime] = useState('')
  const [link, setLink] = useState('')
  const [teacher_id, setTeacher] = useState('')

  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')
  const { id } = route.params

  // const id = '636cbe0453ef6c69dc31e041'
     const validateDate = d
     var linkDate = validateDate.toLocaleDateString('en-GB')

     var linkTime = validateDate.toLocaleTimeString('en-GB')

     const onChange = (event, selectedDate) => {
       const currentDate = selectedDate
       setDate(currentDate)
     }

     const showMode = (currentMode) => {
       DateTimePickerAndroid.open({
         value: d,
         onChange,
         mode: currentMode,
       })
     }

     const showDatepicker = () => {
       showMode('date')
     }

     const showTimepicker = () => {
       showMode('time')
     }




  const loadLink = async () => {
    const url = `https://edumate-backend.herokuapp.com/link/${id}`
    axios.get(url).then((res) => {
      setSubject(res.data.subject)
      setLesson(res.data.lesson_name)
      setGrade(res.data.grade)
      setDate(res.data.date)
      setTime(res.data.time)
      setLink(res.data.link)
      console.log(res.data)
    })
  }

  useEffect(() => {
    loadLink()
  }, [])

  const data = {
    subject,
    lesson_name,
    grade,
    date:linkDate,
    time:linkTime,
    link,
    teacher_id: '516',
  }



  const onChangeHandler = (e) => {
    e.preventDefault()
    const url = `https://edumate-backend.herokuapp.com/link/${id}`
    axios.put(url, data).then((res) => {
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
      <PageTitle>Update Link</PageTitle>
      <InnerContainer>
        <View>
          <View>
            <InputCd
              placeholder='Subject'
              disabled
              placeholderTextColor={darkLight}
              value={subject}
            />
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
              command={showDatepicker}
              onChangeText={(date) => setD(date)}
              value={d}
            />

            <InputCd
              type='time'
              icon='clock'
              placeholder='Time'
              placeholderTextColor={darkLight}
              command={showTimepicker}
              onChangeText={(time) => setD(time)}
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
              <ButtonText>Update</ButtonText>
            </StyledButton>
          </View>
        </View>
      </InnerContainer>
    </StyledContainer>
  )
}

export const InputCd = ({ label, icon, command, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      <RightIcon onPress={command}>
        <Octicons name={icon} size={30} color={brand} />
      </RightIcon>
    </View>
  )
}
