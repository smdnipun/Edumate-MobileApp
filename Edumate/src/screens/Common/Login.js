import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyledContainer,
  colors,
  StyledButton,
  ButtonText,
  ExtraView,
  TextLinkContent,
  TextLink,
  ExtraText,
  StyledTextInputField,
  StyledInputLabel,
} from '../../constants/styles'

const { primary, black } = colors

export default function Login({ navigation }) {
  return (
    <>
      <StyledContainer>
        <StatusBar style='dark' />
        <Text style={styles.header}>Login</Text>
        <View style={styles.inputFieldView}>
          <View style={styles.spacing}>
            <StyledInputLabel>Email</StyledInputLabel>
            <StyledTextInputField placeholder='example@edumate.com' />
          </View>
          <View style={styles.spacing}>
            <StyledInputLabel>Password</StyledInputLabel>
            <StyledTextInputField
              secureTextEntry={true}
              placeholder='* * * * * * *'
            />
          </View>
          <Text style={styles.alignRight}>Forgot Password?</Text>
          <StyledButton>
            <ButtonText>Login</ButtonText>
          </StyledButton>
          <ExtraView>
            <ExtraText>Don't have an account? </ExtraText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SingUpSelection')
              }}
            >
              <TextLinkContent>SignUp</TextLinkContent>
            </TouchableOpacity>
          </ExtraView>
        </View>
      </StyledContainer>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    marginStart: 15,
    fontSize: 40,
    fontWeight: '10px',
    color: black,
  },
  inputFieldView: {
    marginTop: 50,
    margin: 10,
  },
  spacing: {
    marginTop: 15,
    margin: 5,
  },
  alignRight: {
    textAlign: 'right',
    margin: 10,
  },
  alignCenter: {
    textAlign: 'center',
    margin: 15,
  },
})
