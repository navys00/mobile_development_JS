import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState} from 'react';
const CustomCounter = () =>{ 
const [count, setCount] = useState(0);
const onPress = () => setCount(count => count + 1);
const Reset = () => setCount(count => count=0);
return (
    <View>
    <TouchableOpacity style={styles.button} onPress={Reset}>
      <Text style={styles.title}>Reset</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>+</Text>
    </TouchableOpacity>
    <Text style={{color:"white",position:'absolute',top:0,}}>Count{count}</Text>
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

  export default CustomCounter;