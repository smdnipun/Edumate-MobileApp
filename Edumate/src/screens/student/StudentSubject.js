import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, Button, Pressable } from "react-native";
import Feedback from "../student/StudentFeedback.js";
import {
  ButtonText,
  PageTitle,
  StyledButton,
  StyledContainer,
} from "../../constants/styles.js";

export const StudentSubject = ({ navigation }) => (
  <StyledContainer>
    <StatusBar style="dark" />
    <PageTitle>Subject</PageTitle>
    <StyledButton style={style.btn}>
      <ButtonText>Metarial</ButtonText>
    </StyledButton>
    <StyledButton
      onPress={() => {
        navigation.navigate("StudentFeedback");
      }}
      // style={style.btn}
    >
      <ButtonText>FeedBack</ButtonText>
    </StyledButton>
    <StyledButton
      onPress={() => {
        navigation.navigate("AnswerUpload");
      }}
      style={style.btn}
    >
      <ButtonText>Answers</ButtonText>
    </StyledButton>
  </StyledContainer>
);

const style = StyleSheet.create({
  btn: {
    marginTop: 20,
  },
});
