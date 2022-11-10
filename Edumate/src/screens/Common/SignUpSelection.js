import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { InnerContainer, StyledContainer, colors } from '../../constants/styles'
import { StatusBar } from 'expo-status-bar'

const { primary, black } = colors

export default function SignUpSelection({ navigation }) {
  const [selection, setSelection] = useState('')
  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <Text style={styles.header}>Registration</Text>
      <InnerContainer>
        <TouchableOpacity
          activeOpacity={0.5}
        >
          <Image
            source={require('../../../assets/Teacher.png')}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <Text>Teacher</Text>
        <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
        >
          <Image
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png',
            }}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <Text>Student</Text>
      </InnerContainer>
    </StyledContainer>
  )
}

const styles = StyleSheet.create({
  header: {
    marginStart: 15,
    fontSize: 40,
    fontWeight: '10px',
    color: black,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 150,
    width: 150,
    marginTop: 50,
    borderRadius: 5,
    margin: 10,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 150,
    width: 150,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
})
