import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState} from 'react';
const Plus_minus = () =>{ 
const [count, setCount] = useState(0);
const Plus = () => setCount(count => count + 1);
const Minus = () => setCount(count => count - 1);
const Reset = () => setCount(count => count=0);
return (
    <View styles={{width:100,height:100}}>
    <TouchableOpacity style={styles.button} onPress={Minus}>
      <Text style={styles.title}>Minus</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={Plus}>
      <Text style={styles.title}>Plus</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={Reset}>
      <Text style={styles.title}>Reset</Text>
    </TouchableOpacity>
    <Text style={{color:"white",position:'absolute',top:0}}>Count{count}</Text>
    </View>
  );
}
  

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    title: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

  export default Plus_minus;