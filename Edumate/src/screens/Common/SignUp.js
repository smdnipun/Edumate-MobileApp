import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React from 'react'
import { KeyBoardAvoidingWrapper } from '../../components/KeyBoardAvoidingWrapper'
import {
  StyledContainer,
  colors,
  StyledButton,
  ButtonText,
  ExtraView,
  ExtraText,
  TextLinkContent,
} from '../../constants/styles'
import { Input } from '../../constants/InputField'

const { primary, black } = colors

export default function SignUp() {
  return (
    <KeyBoardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style='dark' />
        <Text style={styles.header}>Register</Text>
        <View style={styles.inputFieldView}>
          <View style={styles.spacing}>
            <Input label={'Email'}></Input>
          </View>
          <View style={styles.spacing}>
            <Input label={'Password'}></Input>
          </View>
          <Text style={styles.alignRight}>Forgot Password?</Text>
          <StyledButton>
            <ButtonText>Login</ButtonText>
          </StyledButton>
          <ExtraView>
            <ExtraText>Don't have an account? </ExtraText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SingUp')
              }}
            >
              <TextLinkContent>SignUp</TextLinkContent>
            </TouchableOpacity>
          </ExtraView>
        </View>
      </StyledContainer>
    </KeyBoardAvoidingWrapper>
  )
}

const styles = StyleSheet.create({
  header: {
    marginStart: 15,
    fontSize: 40,
    fontWeight: '10px',
    color: black,
  },
})
