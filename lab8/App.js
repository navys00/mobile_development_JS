import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomCounter from './counter';
import Plus_minus from './plus_minus';
import InitCounter from './InitCounter';
import String_list from './String_list';
import Word_list from './Word_list';
import Word_list2 from './Word_list2';
export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <CustomCounter></CustomCounter>
    </View>
    <View style={styles.container}>
      <Plus_minus></Plus_minus>
    </View>

    <View style={styles.container}>
      <Plus_minus></Plus_minus>
    </View>
      <View>
      <InitCounter InitialValue={100}></InitCounter>
      </View>
      <View>
      <String_list></String_list>
      </View>
      <View>
      <Word_list></Word_list>
      </View>
      <View>
      <Word_list2></Word_list2>
      </View>
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
