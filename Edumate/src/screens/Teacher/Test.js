import React, { useState } from 'react'
import { Button } from 'react-native'


// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

//import DatePicker from the package we installed
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { StyledContainer } from '../../constants/styles'

// DateTimePickerAndroid.open(AndroidNativeProps)
// DateTimePickerAndroid.dismiss(AndroidNativeProps['mode'])

export const Test = () => {
  const [date, setDate] = useState(new Date())

  // console.log(date)
    const validateDate = date
    var s = validateDate.toLocaleDateString('en-GB')
    console.log(s)

     var c = validateDate.toLocaleTimeString('en-GB')
     console.log(c)
   

      let currentDate = `${year}-${month}-${day}`

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate
    setDate(currentDate)
  }

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
    <StyledContainer>
      <View>
        <Button onPress={showDatepicker} title='Show date picker!'  />
        <Button onPress={showTimepicker} title='Show time picker!' />
        <Text>selected: {date.toLocaleString()}</Text>
      </View>
    </StyledContainer>
  )
}
