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

export const TeacherDash = () => {
  const [link, setlink] = useState([])
  const [note, setNote] = useState([])

  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState('')

  const loadNotes = async () => {
    const url = `https://edumate-backend.herokuapp.com/teacherNote/get`
    await axios.get(url).then((res) => {
      setNote(res.data)
    })
  }
  const loadLinks = async () => {
    const url = `https://edumate-backend.herokuapp.com/link`
    await axios.get(url).then((res) => {
      setlink(res.data)
    })
  }
  useEffect(() => {
    loadLinks()
    loadNotes()
  })

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `
    return status + message
  }

  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <PageTitle>Discover</PageTitle>
      <InnerContainer>
        <View>
          <DiscoverTitle>
            <DiscoverText> Notes</DiscoverText>
            <DashButton>
              <Octicons size={30} color={primary} name='chevron-down' />
            </DashButton>
          </DiscoverTitle>
          <ScrollView>
            {note.map((notes) => {
              return (
                <>
                  <TeacherCard id={notes._id}>
                    <TeacherCardRow>
                      <TeacherCardColumn>
                        <TeacherDashContent>
                          subect : {notes.subject}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          Lesson : {notes.lesson_name}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          grade : {notes.grade}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          note : {notes.note}
                        </TeacherDashContent>
                      </TeacherCardColumn>
                      <TeacherCardColumn>
                        <TeacherDashContentButton>
                          <Octicons
                            size={20}
                            color={darkLight}
                            name='comment'
                          />
                        </TeacherDashContentButton>
                        <TeacherDashContentButton>
                          <Octicons size={20} color={darkLight} name='pencil' />
                        </TeacherDashContentButton>
                        <TeacherDashContentButton>
                          <Octicons size={20} color={darkLight} name='trash' />
                        </TeacherDashContentButton>
                      </TeacherCardColumn>
                    </TeacherCardRow>
                  </TeacherCard>
                </>
              )
            })}
          </ScrollView>

          <DiscoverTitle>
            <DiscoverText> Links</DiscoverText>
            <DashButton>
              <Octicons size={30} color={primary} name='chevron-down' />
            </DashButton>
          </DiscoverTitle>
          <ScrollView>
            {link.map((links) => {
              return (
                <>
                  <TeacherCard id={links._id}>
                    <TeacherCardRow>
                      <TeacherCardColumn>
                        <TeacherDashContent>
                          subject : {links.subject}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          lesson : {links.lesson_name}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          grade : {links.grade}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          date : {links.date}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          time : {links.time}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          link :{links.link}
                        </TeacherDashContent>
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
                </>
              )
            })}
          </ScrollView>

          <View></View>
        </View>
      </InnerContainer>
    </StyledContainer>
  )
}
