import React, { useEffect, useState } from 'react'
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native'
import axios from 'axios'
import { Input } from '../../constants/InputField'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  RightIcon,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  StyledTextInput,
  colors,
} from '../../constants/styles.js'
import { StatusBar } from 'expo-status-bar'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'

const { brand, darkLight, primary } = colors


export const AddExams = () => {

    const [day, setDay] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [stream, setStream] = useState('');
    const [subject, setSubject] = useState('');
    const [grade, setGrade] = useState('');
    
    const [subjects, setSubjects] = useState([]);
    const [streams, setStreams] = useState([]);
      
    const validateDate = date
    var examdate = validateDate.toLocaleDateString('en-GB')
    var begin = validateDate.toLocaleTimeString('en-GB')
    var stop = validateDate.toLocaleTimeString('en-GB')

    const formData = 
    {
       day: examdate,
       start: begin,
       end : stop,
       stream,
       subject,
       grade
    }

    const onChangeHandler = () => {
      const url = `https://edumate-backend.herokuapp.com/examtime/add`
      axios.post(url, formData).then((res) => {
        console.log('done')
        alert('Exam added')
      })
    }
   
    const getMessage = () => {
      const status = isError ? `Error: ` : `Success: `
      return status + message
    }

    const loadStreams = async () => {
      const url = `https://edumate-backend.herokuapp.com/stream/`
      await axios.get(url).then((res) => {
          setStreams(res.data)
      })
    }

    const loadSubjects = async () => {
      const url = `https://edumate-backend.herokuapp.com/subject/`
      await axios.get(url).then((res) => {
          setSubjects(res.data)
      })
    }
  
    useEffect(() => {
      loadStreams()
      loadSubjects()
    })

    const showMode = (currentMode) => {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
      })
    }
  
    const showDatepicker = () => {
      showMode('date')
    }
  
    const showTimepicker = () => {
      showMode('time')
    }
  
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}> Add Exam </Text>
          <InputCd
              placeholder='Date'
              placeholderTextColor={darkLight}
              onChangeText={(day) => setDay(day)}
              command={showDatepicker}
              // onChangeText={(date) => setDate(date)}
              value={date.toLocaleDateString()}
            />
       <InputCd
              placeholder='Start time'
              placeholderTextColor={darkLight}
              command={showTimepicker}
              // onChangeText={(time) => setTime(time)}
              value={date.toLocaleTimeString()}
              onChangeText={(start) => setStart(start)}
            />
       <InputCd
              placeholder='End time'
              placeholderTextColor={darkLight}
              command={showTimepicker}
              // onChangeText={(time) => setTime(time)}
              value={date.toLocaleTimeString()}
              onChangeText={(end) => setEnd(end)}
            />
      <Picker
              placeholder='Stream'
              selectedValue={stream}
              onValueChange={(itemValue, itemIndex) => setStream(itemValue)}
            >
              {streams.map((s)=>{
                return(
                  <Picker.Item  value={s.streamname} />
                )
              })}
            
      </Picker>
      <Picker
              placeholder='Subject'
              selectedValue={subject}
              onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
            >
              {subjects.map((s)=>{
                return(
                  <Picker.Item  value={s.subjectname} />
                )
              })}
            
            </Picker>
            <Picker
              placeholder='Grade'
              selectedValue={grade}
              onValueChange={(itemValue, itemIndex) => setGrade(itemValue)}
            >
              <Picker.Item label='12 Grade' value={12} />
              <Picker.Item label='13 Grade' value={13} />
            </Picker>

          <StyledButton  onPress={onChangeHandler}>
                 <ButtonText>Add</ButtonText>
        </StyledButton>
      </SafeAreaView>
    );   
}

export const InputCd = ({ label, icon, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      <RightIcon>
        <Octicons name={icon} size={30}  />
      </RightIcon>
    </View>
  )
}

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

