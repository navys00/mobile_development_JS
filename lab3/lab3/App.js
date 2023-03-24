import { StatusBar } from 'expo-status-bar';
import React,{useRef,useEffect,useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View,Animated} from 'react-native';


export default function App() {

  //const startValue = useRef(new Animated.Value(0.1)).current;

  const startValueY = useRef(new Animated.Value(0)).current;
  const startValueSC = useRef(new Animated.Value(0.1)).current;
  useEffect(() => {
    Animated.timing(startValueY, {
      toValue: 150,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [startValueY]);

  useEffect(() => {
    Animated.timing(startValueSC, {
      toValue: 2,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [startValueSC]);
  

 


    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);
const func=()=>{
  const newTotal = number1 + number2;
        setTotal(newTotal);
        console.log(newTotal);

};
  return (
    <View>
    <View style={[styles.container]} >
    
    <View style={{ flex:1,
      alignSelf:'flex-start',
      left:0,
      top:0,
      width:'45%',
      height:'45%',
      position:'absolute',
      backgroundColor: 'red'}}>
      </View>
      <View style={{ flex:1,
        marginLeft:'auto',
        marginRight:'auto',
        right:40,
        width:'45%',
        height:'45%',
        position:'absolute',
        backgroundColor: 'green'}}>
        </View>
        <View style={{ flex:1,
          alignSelf:'flex-start',
          right:0,
          top:0,
          width:'45%',
          height:'45%',
          position:'absolute',
          backgroundColor: 'blue'}}><Text style={{color:'white',marginTop:'auto',
          marginBottom:'auto',alignSelf:'center'}}>Квадрат</Text>
          </View>
      
      
      <StatusBar style='auto'></StatusBar>
    </View>
    
   <View style={{
     width:180,
     height:180,
      borderColor:'grey',
      borderWidth: 1,
      flexDirection:'row',
    }}>    
        
        <View style={{width:'33%',height:'33%',flexDirection:'column',alignItems:'center',padding:4}}>
        <View style={{width:'100%', height:'100%', backgroundColor: 'red',margin:4}} />
        <View style={{width:'100%', height:'100%', backgroundColor: 'black',margin:4}} /> 
        </View>
        <View style={{width:'33%',height:'33%',flexDirection:'column',alignContent:'center',padding:4}}>
        <View style={{width:'100%', height:'100%', backgroundColor: 'darkorange',margin:4,alignSelf:'center'}} />
        </View>
        <View style={{width:'33%',height:'33%',flexDirection:'column',alignItems:'center',padding:4}}>
        <View style={{ width:'100%', height:'100%', backgroundColor: 'green',margin:4}} />
        <View style={{ width:'100%', height:'100%', backgroundColor: 'pink',margin:4}} />
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
      <View style={{width:400,
        height:300,
        borderColor:'grey',
        borderWidth: 1}}>
        <TextInput type='number' placeholder="0"
        value={number1}
        onChangeText={v => {
            setNumber1(Number.parseInt(v));
        }} style={{height:30,margin:10,borderColor:'black',borderWidth:2}}></TextInput>

        <TextInput type="number"
        placeholder="0"
        value={number2}
        onChange={e => {
            setNumber2(Number.parseInt(e.nativeEvent.text));
        }} style={{height:30,margin:10,borderColor:'black',borderWidth:2}}></TextInput>
        <Button title="подтвердить" onPress={func}></Button>
      </View>

      <View style={{
        height:500,
        width:500,
        borderColor:'grey',
        borderWidth:1,
        //flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',}} >
        <Animated.View style={[{transform:[{scale:startValueSC},{translateY:startValueY}]}]}>
        <View style={{
          height: 50,
          width: 50,
          backgroundColor: 'green',}} ></View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:400,
    height:400,
    borderColor:'grey',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_small:{
    // width:200,
      height:200,
      borderColor:'grey',
      alignItems: 'center',
      justifyContent:'center',
      borderWidth: 1,

  },
  red_box:{
    flex:1,
    width:50,
    height:50,
    position:'absolute',
    //left:124,
    backgroundColor: 'red',
  },
  blue_box:{
    flex:1,
    width:50,
    height:50,
    position:'absolute',
    //right:140,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: 'blue',
  },
  green_box:{
    flex:1,
    width:50,
    height:50,
    position:'absolute',
    //bottom:100,
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
