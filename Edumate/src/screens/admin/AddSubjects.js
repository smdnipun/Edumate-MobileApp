import {React, useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Button } from "react-native";

export const AddSubjects = () => {
//   const [text, onChangeText] = React.useState("Useless Text");
const [streamname, setStreamname] = useState('');
const [subjectname, setSubjectname] = useState('');

const Subject = {streamname, subjectname}

const addSubject = (e)=>{
    e.preventDefault();
    axios.post('/subject/add', Subject);
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Add Subject </Text>
      <TextInput
        style={styles.input}
        onChange= {(e)=>setStreamname(e.target.value)}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Stream Name"
      />
      
        <TextInput
        style={styles.input}
        onChange= {(e)=>setSubjectname(e.target.value)}
        // onChangeText={onChangeText}
        // value={text}
        placeholder="Subject Name"
      />
       <Button color="black"
       onPress={addSubject}
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
