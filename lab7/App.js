import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TrafficLightApp from './app2';
import String_degrees from './string_degrees';
import Button_component from './button_component';
import Secondomer from './secondomer';
export default function App() {
  return (
    <View style={styles.container}>
    <TrafficLightApp></TrafficLightApp>
    <String_degrees></String_degrees>
    
      <Secondomer  ></Secondomer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
