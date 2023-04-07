import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, TextInput,Pressable,TouchableOpacity,Animated,TouchableWithoutFeedback } from 'react-native';
import { useState,useRef,useEffect } from 'react';

const App=()=> {
  

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  const [isPressed,setisPressed]=useState(false);
  const handlepress=()=>{setisPressed(!isPressed)};
const style={
  backgroundColor:isPressed?'red':'green',
};
  return (
    <View style={{alignItems:'flex-start'}} >
    <View style={{width:100,height:100,alignSelf:'center',borderWidth:2,borderColor:'black'}} >
    <TextInput type='number' placeholder='input number' placeholderTextColor={'grey'}></TextInput>
    </View>
    <View style={{width:100,height:100,alignSelf:'center',borderWidth:2,borderColor:'black'}} >
    <TouchableWithoutFeedback onPress={handlepress}>
       <View style={[{width:50,height:50},style]}>
          <Text>CLICK ON ME</Text>
       </View>
    </TouchableWithoutFeedback>
    
    </View>
    </View>

  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
