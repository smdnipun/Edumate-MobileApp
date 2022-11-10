import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ButtonText, PageTitle, StyledButton, StyledContainer, StyledInputLabel, StyledTextInput } from '../../constants/styles'

export const StduentAnswerSheetUpload = () => {
  return (
    <StyledContainer>
        <StatusBar style='dark'/>
        <PageTitle>Upload AnswerSheet</PageTitle>
        <StyledInputLabel>Subject</StyledInputLabel>
        <StyledTextInput/>
        <StyledInputLabel>Stream</StyledInputLabel>
        <StyledTextInput/>
        <StyledInputLabel>Leason Name</StyledInputLabel>
        <StyledTextInput/>
        <StyledInputLabel>Grade</StyledInputLabel>
        <StyledTextInput/>
        <StyledInputLabel>Uplaod File</StyledInputLabel> 
        <StyledTextInput/>
        <StyledButton>
            <ButtonText>UPLOAD</ButtonText>
        </StyledButton>
    </StyledContainer>
  )
}
