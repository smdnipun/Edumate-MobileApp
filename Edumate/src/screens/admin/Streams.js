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
  AdminContainer,
  StreamCard,
  AdminContent,
} from '../../constants/styles.js'
import { StatusBar } from 'expo-status-bar'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

const { brand, darkLight, primary } = colors

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000'

export const Streams = ( navigation ) => {
  const [streams, setStreams] = useState([])

  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')

  const loadStreams = async () => {
    const url = `https://edumate-backend.herokuapp.com/stream/`
    await axios.get(url).then((res) => {
        setStreams(res.data)
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
      <PageTitle>Streams</PageTitle>
      <InnerContainer>
        <View>
          <ScrollView>
            {streams.map((e) => {
              return (
                <>
                  <StreamCard id={e._id}>
                    <TeacherCardRow>
                      <TeacherCardColumn>
                        <AdminContent>
                          {e.streamname}
                        </AdminContent>
                      </TeacherCardColumn>
                      <TeacherCardColumn>
                      <TeacherDashContentButton
                        onPress={() => {
                          navigation.navigate('UpdateStream',{id:e._id})
                        }}>
                        <Octicons size={20} color={darkLight} name='pencil' />
                      </TeacherDashContentButton>        
                      </TeacherCardColumn>
                    </TeacherCardRow>
                  </StreamCard>
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


   