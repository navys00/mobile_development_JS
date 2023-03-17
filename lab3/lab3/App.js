import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View>
    <View style={styles.container} >
      
      <View style={styles.red_box}></View>
      <View style={styles.green_box}></View>
      <View style={styles.blue_box}></View>
      <StatusBar style='auto'></StatusBar>
    </View>
    <View style={{width:200,
      height:150,
      borderColor:'grey',
      borderWidth: 1,
      justifyContent:'center',
      alignItems: 'center',
    }}>
    <View style={[styles.blue_box]}>
      <Text style={{color:'white'}}>Квадрат</Text>
    </View>
      </View>
    <View style={{width:200,
      height:150,
      borderColor:'grey',
      borderWidth: 1,
      flexDirection:'row',flex: 1,
    }}>    

        <View style={{flexDirection:'column',flex: 1}}>
        <View style={{flex: -1,width:50, height:50, backgroundColor: 'red',margin: 5}} />
        <View style={{flex: -1, width:50, height:50, backgroundColor: 'black',margin: 5}} /> 
        </View>
        <View style={{flexDirection:'column',flex: 1}}>
        <View style={{flex: -1, width:50, height:50, backgroundColor: 'darkorange',margin: 5}} />
        </View>
        <View style={{flexDirection:'column',flex: 1}}>
        <View style={{flex: -1, width:50, height:50, backgroundColor: 'green',margin: 5}} />
        <View style={{flex: -1, width:50, height:50, backgroundColor: 'pink',margin: 5}} />
        </View>  
    </View>
    <View style={styles.container_small}>
          <View style={[
          styles.orange_box,
          {
            transform: [{rotate:'45deg',},{scaleX:0.5},{translateY:50}],
          },
        ]}></View>
    
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:400,
    height:300,
    borderColor:'grey',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_small:{
    width:200,
      height:200,
      borderColor:'grey',
      alignItems: 'center',
      justifyContent:'center',
      borderWidth: 1,

  },
  red_box:{
    width:50,
    height:50,
    position:'absolute',
    left:124,
    backgroundColor: 'red',
  },
  blue_box:{
    width:50,
    height:50,
    position:'absolute',
    right:140,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  green_box:{
    width:50,
    height:50,
    position:'absolute',
    bottom:100,
    backgroundColor: 'green',
  },
  white_box:{
    width:50,
    height:50,
    position:'absolute',
    left:50,
    backgroundColor: 'white',
  },
  black_box:{
    width:50,
    height:50,
    right:120,
    flex:1,
    position:'absolute',
    backgroundColor: 'black',
  },
  orange_box:{
    width:50,
    height:50,
    flex:2,
    position:'absolute',
    backgroundColor: 'orange',
  },
});
