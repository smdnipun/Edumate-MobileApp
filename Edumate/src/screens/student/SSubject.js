import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  ButtonText,
  PageTitle,
  StyledButton,
  StyledContainer,
} from "../../constants/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { RefreshControl, ScrollView,StyleSheet } from "react-native";

var userId = "636fa108822e88b4ac2ef253";
AsyncStorage.getItem("user").then((value) => {
  userId = value;
});

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const SSubject = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [item, setItem] = useState([]);
  const drawer = useRef(null);
  const [stream, setStream] = useState("");

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(5000).then(() => setRefreshing(false));
  
      // loadData();

    console.log('refesh')
  }, []);

  // useEffect(() => {
  //   loadData();
  //   //  const loadData = async () => {
  //   //     await axios
  //   //       .get(`https://edumate-backend.herokuapp.com/api/users/${userId}`)
  //   //       .then(async(res) => {
  //   //         // const name = res.data.firstName + ' ' + res.data.lastName
  //   //         setStream(res.data.stream);
  //   //         console.log(stream)
  //   //          await axios.post("https://edumate-backend.herokuapp.com/subject/stream", { streamname: stream}).then((res) => {
  //   //             setItem(res.data);
  //   //             console.log(item)
  //   //           });
  //   //       })
  //   //   }
  // }, []);
  // const loadData = async () => {
  //   await axios
  //     .get(`https://edumate-backend.herokuapp.com/api/users/${userId}`)
  //     .then(async (res) => {
  //       const name = res.data.firstName + " " + res.data.lastName;
  //       setStream(res.data.stream);
  //       console.log(stream);
  //       axios
  //         .post("https://edumate-backend.herokuapp.com/subject/stream", {
  //           streamname: stream,
  //         })
  //         .then((res) => {
  //           setItem(res.data);
  //           console.log(item);
  //         });
  //     });
  // };


  axios
  .get(`https://edumate-backend.herokuapp.com/api/users/${userId}`)
  .then(async (res) => {
    const name = res.data.firstName + " " + res.data.lastName;
    setStream(res.data.stream);
    // console.log(stream);
    axios
      .post("https://edumate-backend.herokuapp.com/subject/stream", {
        streamname: stream,
      })
      .then((res) => {
        setItem(res.data);
        // console.log(item);
      });
  });
  return (
    <StyledContainer>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
      <StatusBar style="dark" />
      <PageTitle>Subject</PageTitle>
      {item.map((r) => {
        return (
          <StyledButton
            onPress={() => {
              navigation.navigate("Studentsubject", { name: r.subjectname });
            }}
          >
            <ButtonText>{r.subjectname}</ButtonText>
          </StyledButton>
        );
      })}

      </ScrollView>
      <RefreshControl text='name' refreshing={refreshing} onRefresh={onRefresh} />
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  scrollView: {
    // flex: 1,
    // backgroundColor: 'pink',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
