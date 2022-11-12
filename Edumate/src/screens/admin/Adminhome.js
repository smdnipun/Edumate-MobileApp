import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button} from 'react-native';
import {
  DashButton,
  ButtonText,
} from '../../constants/styles.js'

const Separator = () => (
  <View style={styles.separator} />
);

export const Adminhome = () => {
  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.btnview}>
          <DashButton>
            <Text style= {styles.textst}>Stream Management</Text>
         </DashButton>         
          </View>
      <Separator />
           <View style={styles.btnview}>
           <DashButton>
              <Text style= {styles.textst}>Subject Management</Text>
           </DashButton>   
          </View>
      <Separator />
          <View style={styles.btnview}>
          <DashButton>
            <Text style= {styles.textst}>Exam Management</Text>
         </DashButton>  
          </View>
      <Separator />
    </SafeAreaView>
  );}


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: 'center',
    marginTop: 250,
    marginHorizontal: 40,
    height: 300,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  textst: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple"
  },
  btnview:{ 
     flex: 500,
     justifyContent: 'center', 
     alignItems: 'center',  
     backgroundColor:"#000000" 
    }
});

