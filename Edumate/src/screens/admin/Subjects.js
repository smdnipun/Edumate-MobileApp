import React, { useEffect, useState } from 'react'
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
  SafeAreaView
} from 'react-native'
import axios from 'axios'
import { Input } from '../../constants/InputField'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
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
  AdminContent,
  AdminContainer,
  TeacherDashContentButton,
  TeacherCardRow,
  TeacherCard,
  AdminCard,
} from '../../constants/styles.js'
import { StatusBar } from 'expo-status-bar'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

const { brand, darkLight, primary } = colors

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000'

export const Subjects = ( {navigation}) => {
  const [subjects, setSubjects] = useState([])

  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')
  
  const deleteSubject = (id) => {
    axios.delete(`https://edumate-backend.herokuapp.com/subject/${id}`)
  }

  const loadStreams = async () => {
    const url = `https://edumate-backend.herokuapp.com/subject/`
    await axios.get(url).then((res) => {
        setSubjects(res.data)
    })
  }

  useEffect(() => {
    loadStreams()
  })

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `
    return status + message
  }

  return (
    <AdminContainer>
      <StatusBar style='dark' />
      <PageTitle>Subjects</PageTitle>
      <InnerContainer>
        <View>
          <ScrollView>
            {subjects.map((e) => {
              return (
                <>
                  <AdminCard id={e._id}>
                    <TeacherCardRow>
                      <TeacherCardColumn>
                        <AdminContent>
                          Stream : {e.streamname}
                        </AdminContent>
                        <AdminContent>
                          Subject : {e.subjectname}
                        </AdminContent>
                      </TeacherCardColumn>
                      <TeacherCardColumn>
                      <TeacherDashContentButton
                        onPress={() => {
                          navigation.navigate('UpdateSubject',{id:e._id})
                        }}>
                        <Octicons size={20} color={darkLight} name='pencil' />
                      </TeacherDashContentButton> 
                      <TeacherDashContentButton
                          onPress={() => {
                            deleteSubject(e._id)
                          }}
                        >
                          <Octicons size={20} color={darkLight} name='trash' />
                        </TeacherDashContentButton>          
                      </TeacherCardColumn>
                    </TeacherCardRow>
                  </AdminCard>
                </>
              )
            })}
          </ScrollView>

          <View></View>
        </View>
      </InnerContainer>
    </AdminContainer>
  )
}


   