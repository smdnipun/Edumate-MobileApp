import React, { useEffect, useState } from 'react'
import { View, Platform, ToastAndroid } from 'react-native'
import axios from 'axios'
import { Input } from '../../constants/InputField'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  RightIcon,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  StyledTextInput,
  colors,
  ButtonTextWhite,
  UploadButton,
  UploadingButton,
} from '../../constants/styles.js'
import { StatusBar } from 'expo-status-bar'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import { UploadFile } from '../../../core/fileUpload'
import { LogBox } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'

LogBox.ignoreLogs(['Setting a timer'])

const { brand, darkLight, primary } = colors

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000'

export const UploadNote = () => {
  const [subject, setSubject] = useState('')
  const [lesson_name, setLesson] = useState('')
  const [grade, setGrade] = useState('')
  const [note, setNote] = useState()
  const [teacher_id, setTeacher] = useState(userId)

 const [blobFile, setBlobFile] = useState(null)
 const [fileName, setFileName] = useState('No Files')
 const [isChoosed, setIsChoosed] = useState(false)
 const [uploadCompleted, isUploadCompleted] = useState(false)
  const [uploadStart, setUploadStart] = useState(false)
  

  var userId = ''
  AsyncStorage.getItem('user').then((value) => {
    userId = value
  })

  var file = ''
  AsyncStorage.getItem('file').then((value) => {
    file = value
  })

   useEffect(() => {
     if (uploadCompleted) {
      //  showToastWithGravityAndOffset('Document Saved SuccessFully')
       clearFiles()
     }
   }, [uploadCompleted])
  
  
  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({})

    if (result != null) {
      const r = await fetch(result.uri)

      const b = await r.blob()
      setFileName(result.name)
      setBlobFile(b)
      setIsChoosed(true)
    }
 
  }

  const clearFiles = () => {
    setFileName('No Files')
    setBlobFile(null)
    setIsChoosed(false)
  }

  const uploadFile = () => {
    if (blobFile) {
      // showToastWithGravityAndOffset('Uploading File....')
      setUploadStart(true)
      UploadFile(blobFile, fileName, isUploadCompleted)
      clearFiles()
    }
  }

  // const showToastWithGravityAndOffset = (msg = '') => {
  //   ToastAndroid.showWithGravityAndOffset(
  //     msg,
  //     ToastAndroid.LONG,
  //     ToastAndroid.BOTTOM,
  //     25,
  //     50
  //   )
  // }


  


  

  
  const onChangeHandler = () => {
       uploadFile()

       const data = {
         subject,
         lesson_name,
         grade,
         note:file,
         teacher_id,
    }
    console.log(data)
    const url = `https://edumate-backend.herokuapp.com/teacherNote/add`
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
            <UploadButton>
              <UploadingButton onPress={()=>pickDocument()}>
                <Octicons size={30} color={brand} name='upload' />
                <ButtonTextWhite>Upload File Here {fileName}</ButtonTextWhite>
              </UploadingButton>
            </UploadButton>
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
