import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, Pressable } from "react-native";
import {
  ButtonText,
  PageTitle,
  StyledButton,
  StyledContainer,
} from "../../constants/styles.js";

export const StudentNotes = ({ navigation,route }) => {
  const [item,setItem] =useState([])
  const getname = route.params
  const name = getname.name

  // useEffect(() => {
  //   axios.post("/teacherNote/notes", { subject: name }).then(async(res) => {
  //     setItem(res.data);
  //     console.log(item);
  //   });
  // },[]);

  axios.post("https://edumate-backend.herokuapp.com/teacherNote/notes", { subject: name }).then(async(res) => {
    setItem(res.data);
    console.log(item);
  });
  return(
  <StyledContainer>
    <StatusBar style="dark" />
    <PageTitle>{name}</PageTitle>
    {item.map((r)=>{
      return(
    <StyledButton
      onPress={() => {
        navigation.navigate("Studentsubject");
      }}
      style={style.btn}
    >
      <ButtonText>{r.lesson_name}</ButtonText>
      <ButtonText>{r.lesson_name}</ButtonText>
    </StyledButton>
      )
    })}
  </StyledContainer>
)}

const style = StyleSheet.create({
  btn: {
    marginTop: 20,
  },
});
