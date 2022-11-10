import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const AddStreams = () => {
//   const [text, onChangeText] = React.useState("Useless Text");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Add Stream </Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Stream Name"
      />
       <Button color="black"
        title="Add"
        // onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    fontSize:30,
  },
});
