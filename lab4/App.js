import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, TextInput,Pressable,TouchableOpacity,Animated,TouchableWithoutFeedback,Picker,Switch} from 'react-native';
import { useState,useRef,useEffect } from 'react';
import Slider from '@react-native-community/slider';
const App=()=> {
  const[selectedobj,setSelectedobj]=useState('танк');
  console.log(selectedobj);
  let tmp='';

  const [count, setCount] = useState(0);
  const onPress = () => setCount(count => count + 1);
  const [isPressed,setisPressed]=useState(false);
  const handlepress=()=>{setisPressed(!isPressed)};
const style={
  backgroundColor:isPressed?'red':'rgb(255,204,204)',
};
  const [open,setopen]=useState(false);
  const [value,setValue]=useState(0);
  return (
    <View style={{alignItems:'flex-start'}} >
    <View style={{width:100,height:100,alignItems:'center',borderWidth:2,borderColor:'black'}} >
    <TextInput type='number' placeholder='input number' placeholderTextColor={'grey'}></TextInput>
    </View>
    <View style={{width:100,height:100,alignItems:'center',borderWidth:2,borderColor:'black'}} >
    <TouchableWithoutFeedback onPress={handlepress}>
       <View style={[{width:50,height:50},style]}>
          <Text>Point 2</Text>
       </View>
    </TouchableWithoutFeedback>
    </View>

     <View style={{width:100,height:100,alignItems:'center',borderWidth:2,borderColor:'black'}} >
     <Pressable>
        {({pressed}) => (
          <Text style={{backgroundColor:'green'}}>{pressed ? 'pressed!' : 'click me'}</Text>
        )}
      </Pressable>
    </View>
    <View style={{width:100,height:100,alignItems:'center',borderWidth:2,borderColor:'black'}} >
     <Pressable onPress={onPress}  >
     <Text style={{backgroundColor:'orange'}}>Click me</Text>
      </Pressable>
      <Text>{count}</Text>
    </View>
    <View style={{width:100,height:100,alignItems:'center',borderWidth:2,borderColor:'black'}} >
     <Picker  selectedValue={selectedobj} onValueChange={(itemValue, itemIndex) => setSelectedobj(itemValue)}>
      <Picker.Item label="Танк" value="танк" />
      <Picker.Item label="Чашка" value="чашка" />
      <Picker.Item label="Мячик" value="мячик" />
     </Picker>
    </View>
    <View style={{width:100,height:100,alignItems:'center',borderWidth:2,borderColor:'black'}} >
     <Switch value={open} onValueChange={setopen} onChange={open?tmp='unlocked':tmp='locked'} >  
      </Switch>
      <Text>{tmp}</Text>
    </View>
    <View style={{width:100,height:100,alignItems:'center',borderWidth:2,borderColor:'black'}} >
     <Slider >

     </Slider>
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
