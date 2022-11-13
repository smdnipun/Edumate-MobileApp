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

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000'

export const UpdateExam = ({ route, navigation }) => {

    const [day, setDay] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [stream, setStream] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');
    
    const [subjects, setSubjects] = useState([]);
    const [streams, setStreams] = useState([]);

  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')
  const { id } = route.params

  
  const loadStreams = async () => {
    const url = `https://edumate-backend.herokuapp.com/stream/`
    await axios.get(url).then((res) => {
        setStreams(res.data)
    })
  }

  const loadSubjects = async () => {
    const url = `https://edumate-backend.herokuapp.com/subject/`
    await axios.get(url).then((res) => {
        setSubjects(res.data)
    })
  }

  const loadExams = async () => {
    const url = `https://edumate-backend.herokuapp.com/exam/${id}`
    axios.get(url).then((res) => {
      setStream(res.data.streamname)
      setSubject(res.data.subject)
      setStart(res.data.start)
      setEnd(res.data.end)
      setDay(res.data.day)
      setGrade(res.data.grade)
      console.log(res.data)
    })
  }


  useEffect(() => {
    loadStreams()
    loadSubjects()
    loadExams()
  })

  const data = {day, start, end, stream, subject, grade}

  const onChangeHandler = (e) => {
    e.preventDefault()
    const url = `https://edumate-backend.herokuapp.com/examtime/${id}`
    axios.put(url, data).then((res) => {
      console.log('done')
    })
  }


  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `
    return status + message
  }

  return (
    <SafeAreaView style={styles.container}>
         <Text style={styles.text}> Update Exam </Text>
        <InputCd
          placeholder='Date'
          placeholderTextColor={darkLight}
          value={day}
          onChangeText={(day) => setDay(day)}
        />
        <InputCd
          placeholder='Start time'
          placeholderTextColor={darkLight}
          value={start}
          onChangeText={(start) => setStart(start)}
        />
         <InputCd
          placeholder='End time'
          placeholderTextColor={darkLight}
          value={end}
          onChangeText={(end) => setEnd(end)}
        />
        <Picker
          placeholder='Stream'
          selectedValue={stream}
          onValueChange={(itemValue, itemIndex) => setStream(itemValue)}
        >
          {streams.map((s)=>{
            return(
              <Picker.Item  value={s.streamname} />
            )
          })}
        
        </Picker>
        <Picker
          placeholder='Subject'
          selectedValue={subject}
          onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
        >
          {subjects.map((s)=>{
            return(
              <Picker.Item  value={s.subjectname} />
            )
          })}
        
        </Picker>
        <Picker
          placeholder='Grade'
          selectedValue={grade}
          onValueChange={(itemValue, itemIndex) => setGrade(itemValue)}
        >
          <Picker.Item label='12 Grade' value={12} />
          <Picker.Item label='13 Grade' value={13} />
        </Picker>

      <StyledButton  onPress={onChangeHandler}>
             <ButtonText>Update</ButtonText>
      </StyledButton>
  </SafeAreaView>
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