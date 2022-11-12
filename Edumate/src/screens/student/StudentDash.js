import React from "react";
import {
  ButtonText,
  SBox,
  SStyledButton,
  StyledButton,
  StyledContainer,
} from "../../constants/styles";

export const StudentDash = ({navigation}) => {
  return (
    <StyledContainer>
      <SBox></SBox>
      <SStyledButton
        onPress={() => {
          navigation.navigate("StudentNotes");
        }}
      >
        <ButtonText>Subjects</ButtonText>
      </SStyledButton>
      <SStyledButton
        onPress={() => {
          navigation.navigate("StudentExamTimeTable");
        }}
      >
        <ButtonText>Exams</ButtonText>
      </SStyledButton>
    </StyledContainer>
  );
};
