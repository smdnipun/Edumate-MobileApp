import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
  DrawerLayoutAndroid,
  Button,
  Image,
} from "react-native";
import axios from "axios";
import { Input } from "../../constants/InputField";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  StyledTextInput,
  colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  StyledButtoWhite,
  ButtonTextWhite,
  UploadButton,
  UploadingButton,
  DiscoverTitle,
  DiscoverText,
  DashButton,
  TeacherCardColumn,
  TeacherDashContent,
  TeacherDashContentButton,
  TeacherCardRow,
  TeacherCard,
  StyledContainerDash,
  LogoutBtn,
  RightBox,
  DrawerIcon,
  DrawerBtn,
} from "../../constants/styles.js";
import { StatusBar } from "expo-status-bar";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

const { brand, darkLight, primary } = colors;

const API_URL =
  Platform.OS === "ios" ? "http://localhost:5000" : "http://10.0.2.2:5000";
var userId = "";
AsyncStorage.getItem("user").then((value) => {
  userId = value;
});

export const TeacherDash = ({ navigation }) => {
  const drawer = useRef(null);
  const [link, setlink] = useState([]);
  const [note, setNote] = useState([]);

  const loadNotes = async () => {
    const url = `https://edumate-backend.herokuapp.com/teacherNote/get/${userId}`;
    await axios.get(url).then((res) => {
      setNote(res.data);
    });
  };
  const loadLinks = async () => {
    const url = `https://edumate-backend.herokuapp.com/link`;
    await axios.get(url).then((res) => {
      setlink(res.data);
    });
  };
  useEffect(() => {
    loadLinks();
  }, []);

  useEffect(() => {
    loadNotes();
  }, []);

  const deleteNote = (id) => {
    axios.delete(`https://edumate-backend.herokuapp.com/teacherNote/${id}`);
  };

  const deleteLink = (id) => {
    axios.delete(`https://edumate-backend.herokuapp.com/link/${id}`);
  };

  const Logout = () => {
    AsyncStorage.removeItem("user");
    navigation.navigate("Login");
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <View style={styles.row}>
        <View>
          <Image
            source={require("../../../assets/Picture1.png")}
            style={styles.drawerImage}
          />
        </View>
        <View style={styles.rowInside}>
          <Text style={styles.paragraph}>Edumate</Text>
        </View>
      </View>
      <DrawerBtn
        onPress={() => {
          navigation.navigate("User");
        }}
      >
        <Text>User Profile</Text>
      </DrawerBtn>
      <LogoutBtn onPress={Logout}>
        <ButtonText>Logout</ButtonText>
      </LogoutBtn>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"right"}
      renderNavigationView={navigationView}
    >
      <StyledContainerDash>
        <StatusBar style="dark" />
        <View>
          <PageTitle>Discover</PageTitle>
          <DrawerIcon>
            <TouchableOpacity
              title="Open drawer"
              onPress={() => drawer.current.openDrawer()}
            >
              <View>
                <Octicons size={20} color={darkLight} name="three-bars" />
              </View>
            </TouchableOpacity>
          </DrawerIcon>
        </View>
        <InnerContainer>
          <View>
            <DiscoverTitle>
              <DiscoverText> Notes</DiscoverText>
              <DashButton>
                <Octicons size={30} color={primary} name="chevron-down" />
              </DashButton>
            </DiscoverTitle>
            <ScrollView>
              {note.map((notes) => {
                return (
                  <TeacherCard>
                    <TeacherCardRow>
                      <TeacherCardColumn>
                        <TeacherDashContent>
                          subect : {notes.subject}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          Lesson : {notes.lesson_name}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          grade : {notes.grade}
                        </TeacherDashContent>
                        <TeacherDashContent>
                          note : {notes.note}
                        </TeacherDashContent>
                      </TeacherCardColumn>
                      <TeacherCardColumn>
                        <TeacherDashContentButton
                          onPress={() => {
                            navigation.navigate("Comments");
                          }}
                        >
                          <Octicons
                            size={20}
                            color={darkLight}
                            name="comment"
                          />
                        </TeacherDashContentButton>
                        <TeacherDashContentButton
                          onPress={() => {
                            navigation.navigate("UpdateNote");
                          }}
                        >
                          <Octicons size={20} color={darkLight} name="pencil" />
                        </TeacherDashContentButton>
                        <TeacherDashContentButton
                          onPress={() => {
                            deleteNote(note._id);
                          }}
                        >
                          <Octicons size={20} color={darkLight} name="trash" />
                        </TeacherDashContentButton>
                      </TeacherCardColumn>
                    </TeacherCardRow>
                  </TeacherCard>
                );
              })}
            </ScrollView>

            <DiscoverTitle>
              <DiscoverText> Links</DiscoverText>
              <DashButton>
                <Octicons size={30} color={primary} name="chevron-down" />
              </DashButton>
            </DiscoverTitle>
            <ScrollView>
              {link.map((links) => {
                return (
                  <>
                    <TeacherCard id={links._id}>
                      <TeacherCardRow>
                        <TeacherCardColumn>
                          <TeacherDashContent>
                            subject : {links.subject}
                          </TeacherDashContent>
                          <TeacherDashContent>
                            lesson : {links.lesson_name}
                          </TeacherDashContent>
                          <TeacherDashContent>
                            grade : {links.grade}
                          </TeacherDashContent>
                          <TeacherDashContent>
                            date : {links.date}
                          </TeacherDashContent>
                          <TeacherDashContent>
                            time : {links.time}
                          </TeacherDashContent>
                          <TeacherDashContent>
                            link :{links.link}
                          </TeacherDashContent>
                        </TeacherCardColumn>
                        <TeacherCardColumn>
                          <TeacherDashContentButton
                            onPress={() => {
                              navigation.navigate("UpdateLink", {
                                id: links._id,
                              });
                            }}
                          >
                            <Octicons
                              size={20}
                              color={darkLight}
                              name="pencil"
                            />
                          </TeacherDashContentButton>
                          <TeacherDashContentButton
                            onPress={() => {
                              deleteLink(links._id);
                            }}
                          >
                            <Octicons
                              size={20}
                              color={darkLight}
                              name="trash"
                            />
                          </TeacherDashContentButton>
                        </TeacherCardColumn>
                      </TeacherCardRow>
                    </TeacherCard>
                  </>
                );
              })}
            </ScrollView>

            <View></View>
          </View>
        </InnerContainer>
      </StyledContainerDash>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    paddingTop: 15,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    paddingLeft: 10,
    fontSize: 40,
    marginTop: 0,
    paddingTop: 0,
  },
  row: {
    flexDirection: "row",
    paddingTop: 20,
  },
  rowInside: {
    marginBottom: 10,
  },
  drawerImage: {
    height: 45,
    width: 60,
    resizeMode: "stretch",
  },
  btnLogout: {
    backgroundColor: "#E14545",
  },
});
