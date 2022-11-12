import axios from 'axios';
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { ButtonText, PageTitle, StyledButton, StyledContainer, StyledInputLabel, StyledTextInput } from '../../constants/styles'

export const StudentFeedback = () => {

  const [subject, setSubject] = useState();
  const [comment, setComment] = useState();

  const data = { subject, comment };

  const onChangeHandler = () => {
    const url = `https://edumate-backend.herokuapp.com/subjectfeedback/add`;
    axios.post(url, data).then((res) => {
      console.log("done");
      alert("comment added");
    });
  };

  return (
    <StyledContainer>
        <StatusBar style="dark" />
        <PageTitle>Feed Back</PageTitle>
        <StyledInputLabel>Subject</StyledInputLabel>
        <StyledTextInput
        value={subject}
        onChangeText={(subject) => setSubject(subject)}
        />
        <StyledInputLabel>FeedBack</StyledInputLabel>
        <StyledTextInput
        value={comment}
        onChangeText={(comment) => setComment(comment)}
        />
        <StyledButton onPress={onChangeHandler}>
          <ButtonText>UPLOAD</ButtonText>
        </StyledButton>
    </StyledContainer>
  )
}
