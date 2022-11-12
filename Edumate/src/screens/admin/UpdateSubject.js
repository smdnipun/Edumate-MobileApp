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

export const UpdateSubject = ({ route, navigation }) => {
  const [streamname, setStreamname] = useState('')
  const [subjectname, setSubjectname] = useState('')
  const [streams, setStreams] = useState([])

  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')
  const { id } = route.params

  const loadSubjects = async () => {
    const url = `https://edumate-backend.herokuapp.com/subject/`
    await axios.get(url).then((res) => {
        setStreams(res.data)
        setStreamname(res.data.streamname)
        setSubjectname(res.data.subjectname)
    })
  }

  const loadStreams = async () => {
    const url = `https://edumate-backend.herokuapp.com/stream/`
    await axios.get(url).then((res) => {
        setStreams(res.data)
    })
  }

  useEffect(() => {
    loadStreams()
    loadSubjects()
  })

  const data = {
    streamname,
    subjectname,
  }

  const onChangeHandler = (e) => {
    e.preventDefault()
    const url = `https://edumate-backend.herokuapp.com/subject/${id}`
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
    <Text style={styles.text}> Update Subject </Text>
      <Picker
          selectedValue={streamname}
          onValueChange={(itemValue, itemIndex) => setStreamname(itemValue)}
        >
          {streams.map((s)=>{
            return(
              <Picker.Item  value={s.streamname} />
            )
          })}
        
        </Picker>
          <InputCd
          placeholder='Subject Name'
          placeholderTextColor={darkLight}
          value={subjectname}
          onChangeText={(subjectname) => setSubjectname(subjectname)}

        />
      <StyledButton onPress={onChangeHandler}>
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