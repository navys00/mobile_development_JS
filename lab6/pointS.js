import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const PointS = () => {
  return (
    <View style={styles.container}>
      <View style={{width:200,height:100,backgroundColor:'red'}}> <Text style={{color:'green'}}>red</Text></View>
      <View style={{width:200,height:100,backgroundColor:'black'}}> <Text style={{color:'white'}}>black</Text></View>
      <View style={{width:200,height:100,backgroundColor:'white'}}> <Text style={{color:'black'}}>white</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  rectangle: {
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleText: {
    fontSize: 20,
  },
});

export default PointS;