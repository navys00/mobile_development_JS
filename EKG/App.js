import React,{useState} from 'react';
import { SafeAreaView, View,StyleSheet,} from 'react-native';
import { CheckBox } from '@rneui/themed'
import { Icon } from '@rneui/themed';
import { Linking, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button,Text, } from 'react-native-web';
import Modal from "react-native-modal";
const Stack=createNativeStackNavigator();

function HomeScreen({navigation}) {
const [checked, setChecked] = useState(false);
const toggleCheckbox = () => setChecked(!checked);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CheckBox checked={checked}
      onPress={toggleCheckbox}
      size={30}
      uncheckedColor='red'
      title={"не нажато"}
      checkedTitle={<Text style={{color: 'blue'}} onPress={()=>navigation.navigate("License")}>Лицензионное соглашение</Text>}
      checkedColor="green"></CheckBox>
    </View>
  );
}

function LicenseScreen({navigation}) {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Текст лицензии</Text>
        <Button onPress={()=>navigation.navigate("HOME")} title='принять соглашение' ></Button>
        <Button title=' не принять соглашение' >не принять соглашение</Button>

      </View>
    );
  }
export default function App() {
  return (

    <View style={{ flex: 1 }}>
      <NavigationContainer>
       <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen name="HOME" component={HomeScreen} />
        <Stack.Screen name="License" component={LicenseScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
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




