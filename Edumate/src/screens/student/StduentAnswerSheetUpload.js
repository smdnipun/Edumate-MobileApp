import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ButtonText,
  PageTitle,
  StyledButton,
  StyledContainer,
  StyledInputLabel,
  StyledTextInput,
} from "../../constants/styles";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { Button, View } from "react-native";

export const StduentAnswerSheetUpload = () => {
  const [doc, setDoc] = useState();
  const [fname, setFname] = useState();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "*/*",
      copyToCacheDirectory: true,
    }).then((response) => {
      if (response.type == "success") {
        let { name, size, uri } = response;
        let nameParts = name.split(".");
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = 
          {
            name: name,
            size: size,
            uri: uri,
            type: "application/" + fileType,
          }
        
        console.log(fileToUpload, "...............file");
        setDoc(fileToUpload);
        console.log(doc);
        // console.log(doc.name);
        // console.log(response.name);
        setFname(doc.name);
        // console.log(fname);
      }
    });
    // console.log(result);
    // console.log("Doc: " + doc.uri);
  };

  const postDocument = () => {
    // const url = "http://192.168.10.107:8000/upload";
    const url = `https://edumate-backend.herokuapp.com/StudentAnswers/add`;
    const fileUri = doc.uri;
    const formData = new FormData();
    formData.append(url, doc);
    const options = {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };
    // console.log(formData);

    fetch(url, options).catch((error) => console.log(error));
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <PageTitle>Upload AnswerSheet</PageTitle>
      <StyledInputLabel>Subject</StyledInputLabel>
      <StyledTextInput />
      <StyledInputLabel>Stream</StyledInputLabel>
      <StyledTextInput />
      <StyledInputLabel>Leason Name</StyledInputLabel>
      <StyledTextInput />
      <StyledInputLabel>Grade</StyledInputLabel>
      <StyledTextInput />
      <StyledInputLabel>Uplaod File</StyledInputLabel>
      <StyledTextInput />
      <Button title="Select Document" onPress={pickDocument} />
      <StyledButton>
        <ButtonText>{fname}</ButtonText>
      </StyledButton>
      <Button title="Upload" onPress={postDocument} />
      <StyledButton>
        <ButtonText>UPLOAD</ButtonText>
      </StyledButton>
    </StyledContainer>
  );
};
