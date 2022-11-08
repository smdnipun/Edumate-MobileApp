import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppLogo, colors, LoadingContainer } from '../../constants/styles'
const { primary } = colors

export default function FirstSrn() {
  return (
    <>
      <LoadingContainer source={require('../../../assets/wallpaper.jpg')}>
        <AppLogo source={require('../../../assets/Picture1.png')}></AppLogo>
        <Text style={styles.nameTag}> Edumate </Text>
      </LoadingContainer>
    </>
  )
}

const styles = StyleSheet.create({
  nameTag: {
    marginTop: 10,
    fontSize: 50,
    fontWeight: '10px',
    color: primary,
  },
})
