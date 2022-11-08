import styled from 'styled-components'
import Constants from 'expo-constants'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'

const StatusBarHeight = Constants.statusBarHeight

export const colors = {
  black: '#000000',
  primary: '#FFFFFF',
  secondary: '#E5E7EB',
  tertiary: '#00006B',
  error100: '#fcdcbf',
  error500: '#f37c13',
  darkLight: '#9CA3AF',
}

export const LoadingContainer = styled.ImageBackground`
  min-width: 100%;
  height: 94%;
  margin: 0;
  align-items: center;
`
export const AppLogo = styled.Image`
  margin-top: 250px;
  width: 160px;
  height: 120px;
`

const { primary, secondary, tertiary, darkLight, brand, green, red } = colors
export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`

export const BlackButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 5px;
  height: 50px;
`

export const StyledTextInput = styled.TextInput`
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 45px;
  width: 200px;
  margin-bottom: 10px;
  color: ${tertiary};
`
