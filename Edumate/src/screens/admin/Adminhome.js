import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Alert, Card, Title } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export const Adminhome = () => (
  <SafeAreaView style={styles.container}>
    <View>
    <Button 
        title="Subject Management"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button  style= {styles.btnStyle}
        title="Subject Management"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
    <Separator />
    <View>
      <Button style= {styles.btnStyle}
        title="Exam Management"
        onPress={() => Alert.alert('Cannot press this one')}
      />
    </View>
    <Separator />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btnStyle: {
    color:"#841584",
    height: 10,
    width:15,
  }
});

export default Adminhome;