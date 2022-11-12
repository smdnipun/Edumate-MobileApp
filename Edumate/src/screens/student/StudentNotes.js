import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, StyleSheet, Text, Button, Pressable } from "react-native";
import {
  ButtonText,
  PageTitle,
  StyledButton,
  StyledContainer,
} from "../../constants/styles.js";

export const StudentNotes = ({ navigation }) => (
  <StyledContainer>
    <StatusBar style="dark" />
    <PageTitle>Subject Name</PageTitle>
    <StyledButton
      onPress={() => {
        navigation.navigate("Studentsubject");
      }}
      style={style.btn}
    >
      <ButtonText>Note 1</ButtonText>
    </StyledButton>
    <StyledButton  onPress={() => {
        navigation.navigate("Studentsubject");
      }} style={style.btn}>
      <ButtonText>Note 2</ButtonText>
    </StyledButton>
    <StyledButton  onPress={() => {
        navigation.navigate("Studentsubject");
      }} style={style.btn}>
      <ButtonText>Note 3</ButtonText>
    </StyledButton>
  </StyledContainer>
);

const style = StyleSheet.create({
  btn: {
    marginTop: 20,
  },
});
