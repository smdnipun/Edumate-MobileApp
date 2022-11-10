import styled from 'styled-components'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'

const StatusBarHeight = Constants.statusBarHeight

export const colors = {
  black: '#000000',
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#00006B',
  darkLight: '#9CA3AF',
  brand: '#000000',
  green: '#10B981',
  red: '#EF44444',
  error100: '#fcdcbf',
  error500: '#f37c13',
}
const { primary, secondary, tertiary, darkLight, brand, green, red } = colors

export const LoadingContainer = styled.ImageBackground`
  min-width: 100%;
  height: 100%;
  align-items: center;
`
export const AppLogo = styled.Image`
  margin-top: 250px;
  width: 160px;
  height: 120px;
`

export const StyledContainer = styled.View`
  flex: 1;
  padding: 15px;
  padding-top: ${StatusBarHeight + 90}px;
  background-color: ${primary};
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`

export const PageLogo = styled.Image`
  width: 250px;
  height: 200px;
`

export const PageTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
  ${(props) =>
    props.welcome == true &&
    `
    font-size: 35px;
  `}
`

export const SubTitle = styled.Text`
  font-size: 10px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
  ${(props) =>
    props.welcome == true &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`

export const SubTitle1 = styled.Text`
  font-size: 12px;
  margin-bottom: 10px;
  text-align: center;
  letter-spacing: 1px;
  font-weight: itelic;
  color: ${tertiary};
`
export const SubTitle2 = styled.Text`
  font-size: 10px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: itelic;
  color: ${tertiary};
`

export const StyledFormArea = styled.View`
  width: 90%;
`

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding-left: 60px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 45px;
  margin-bottom: 10px;
  color: ${tertiary};
`

export const StyledTextInputField = styled.TextInput`
  // background-color: ${secondary};
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  font-size: 16px;
  height: 45px;
  margin-bottom: 10px;
  border: 2px
`
export const StyledTextInputCard = styled.TextInput`
  background-color: ${secondary};
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
  font-size: 16px;
  height: 45px;
  margin-bottom: 10px;
  color: ${tertiary};
`
export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 16px;
  text-align: left;
`
export const LeftIcon = styled.View`
  left: 15px;
  top: 30px;
  position: absolute;
  z-index: 1;
`
export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 32px;
  position: absolute;
  z-index: 1;
`
export const StyledButton = styled.TouchableOpacity`
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 5px;
  height: 55px;
`
export const StyledButtoWhite = styled.TouchableOpacity`
  background-color: ${primary};
  justify-content: center;
  border: 1px;
  border-color: ${brand};
  align-items: center;
  border-radius: 5px;
  margin: 5px;
  height: 55px;
`

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`

export const ButtonTextWhite = styled.Text`
  color: ${brand};
  font-size: 16px;
`

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${(props) => (props.type == 'SUCCESS' ? green : red)};
`

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin: 10px;
`

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`
export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`
export const TextLinkContent = styled.Text`
  color: ${tertiary};
  font-size: 15px;
`

export const DashBoard = styled.View`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: auto;
  align-items: center;
`

export const LeftBox = styled.View`
  width: 100px;
  height: 100px;
  left: 10px;
`
export const RightBox = styled.View`
  width: 100px;
  height: 100px;
  right: -150px;
`
