import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useState } from 'react'
import { KeyBoardAvoidingWrapper } from '../../components/KeyBoardAvoidingWrapper'
import {
  StyledContainer,
  colors,
  StyledButton,
  ButtonText,
  ExtraView,
  ExtraText,
  TextLinkContent,
  StyledInputLabel,
  StyledTextInputField,
} from '../../constants/styles'
// import DropDownPicker from 'react-native-dropdown-picker'
// import { Dropdown } from 'react-native-material-dropdown'

const { primary, black } = colors

export default function SignUp({ navigation }) {
  const [regForm, setRegForm] = useState(false)
  // let data = [
  //   {
  //     value: 'Banana',
  //   },
  //   {
  //     value: 'Mango',
  //   },
  //   {
  //     value: 'Pear',
  //   },
  // ]
  return (
    <KeyBoardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style='dark' />
        <Text style={styles.header}>Register</Text>
        {/* {!regForm && (
          
        )} */}
        <View style={styles.formView}>
          <View style={styles.container}>
            <View style={styles.inputField}>
              <StyledInputLabel>First Name</StyledInputLabel>
              <StyledTextInputField placeholder='First Name' />
            </View>
            <View style={styles.inputField}>
              <StyledInputLabel>Last Name</StyledInputLabel>
              <StyledTextInputField placeholder='Last Name' />
            </View>
          </View>
          <View style={styles.spacing}>
            <StyledInputLabel>Email</StyledInputLabel>
            <StyledTextInputField placeholder='example@edumate.com' />
          </View>
          <View style={styles.spacing}>
            <StyledInputLabel>Role</StyledInputLabel>
            {/* <DropDownPicker
              items={[
                { label: 'Student', value: 'student' },
                { label: 'Teacher', value: 'teacher' },
              ]}
              defaultIndex={0}
              containerStyle={{ height: 45 }}
              onChangeItem={(item) => console.log(item.label, item.value)}
            /> */}
            {/* <Dropdown label='Favorite Fruit' data={data} /> */}
          </View>
          <View style={styles.spacing}>
            <StyledInputLabel>Stream</StyledInputLabel>
            <StyledTextInputField placeholder='example@edumate.com' />
          </View>
          <View style={styles.spacing}>
            <StyledInputLabel>Password</StyledInputLabel>
            <StyledTextInputField
              secureTextEntry={true}
              placeholder='* * * * * * *'
            />
          </View>
          <View style={styles.spacing}>
            <StyledInputLabel>Re-enter Password</StyledInputLabel>
            <StyledTextInputField
              secureTextEntry={true}
              placeholder='* * * * * * *'
            />
          </View>
          <StyledButton>
            <ButtonText>Register</ButtonText>
          </StyledButton>
          <ExtraView>
            <ExtraText>Already have an account? </ExtraText>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login')
              }}
            >
              <TextLinkContent>Login</TextLinkContent>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputField: {
    margin: 5,
    flex: 1,
  },
  formView: {
    marginTop: 10,
    margin: 10,
  },
  spacing: {
    marginTop: 0,
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
