import React from "react";
import { View, StyleSheet, Text, Button, Pressable } from "react-native";

export const Home = () => (
  <View style={style.container}>
    <Text style={style.border}>Stream</Text>

    <Pressable style={style.btn}>
      <Text style={style.text}>Subject</Text>
    </Pressable>
    <Pressable style={style.btn}>
      <Text style={style.text}>Subject</Text>
    </Pressable>
    <Pressable style={style.btn}>
      <Text style={style.text}>Subject</Text>
    </Pressable>
  </View>
);

const style = StyleSheet.create({
  border: {
    color: "#888",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    width:150,
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 9,
    elevation: 5,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
