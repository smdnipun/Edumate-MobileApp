import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ButtonText, PageTitle, StyledButton, StyledContainer, StyledInputLabel, StyledTextInput } from '../../constants/styles'

export const StudentComment = () => {
  return (
    <StyledContainer>
        <StatusBar style='dark'/>
        <PageTitle>Feed Back</PageTitle>
        <StyledInputLabel>Subject</StyledInputLabel>
        <StyledTextInput/>
        <StyledInputLabel>Comment</StyledInputLabel>
        <StyledTextInput/>
        <StyledButton>
            <ButtonText>UPLOAD</ButtonText>
        </StyledButton>
    </StyledContainer>
  )
}
