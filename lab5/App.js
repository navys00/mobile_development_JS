import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, Linking,FlatList,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CalendarPicker from 'react-native-calendar-picker';
import {TimePicker} from 'react-time-picker';
import { useState } from 'react';
import { TextInput } from 'react-native-web';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { MenuContext,Menu,MenuOptions,MenuOption,MenuTrigger,MenuProvider} from 'react-native-popup-menu';

const  App=()=> {
  const array= [
  {"event": "birthday party","date": "2023-06-22"},
  {"event": "уборка",   "date": "2023-06-10"},
  {"event": "хлеб купить","date": "2023-06-12"},
  ]
  const array2= [
    {event: "birthday party",date: "2023-06-22"},
    {event: "уборка",   date: "2023-06-10"},
    {event: "хлеб купить",date: "2023-06-12"},
    ]
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.event}</Text>
      <Text>{item.date}</Text>
    </View>
  );
  
  const [value, setValue] = useState(null);

    
  
  array.sort((a, b) => new Date(a.date) - new Date(b.date));

  const json = JSON.stringify(array,null,2);

  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const startDate = selectedStartDate ? selectedStartDate.format('YYYY-MM-DD').toString() : '';
  const [visible,setvisible]=useState(false);
  const [text,onChangeText]=useState('');
  const Stack=createNativeStackNavigator();
  const [cntStack,setcntStack]=useState(0);
  const [Count,setCount]=useState(0);
  const stack_plus =()=>(setcntStack(cntStack=>cntStack+1))
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const handleChange = ( hours, minutes) => {
    setHours(hours);
    setMinutes(minutes);
  };
  const handlePress = () => {
    Linking.openURL("https://portal.unn.ru/")
  };
  function stack_minus(){
    if(cntStack>0){
      setcntStack(cntStack=>cntStack-1)
    }
  }

  function minus(){
      setCount(Count=>Count-1);
  }
  function plus(){
    setCount(Count=>Count+1);
}

  function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >Home Screen</Text>
      <Button title='To first' onPress={()=>navigation.navigate('first')}></Button>
      <Button title='To second' onPress={()=>navigation.navigate('second')}></Button>
      <Button title='To third' onPress={()=>navigation.navigate('third')}></Button>
      <Button title='To four' onPress={()=>navigation.navigate('four')}></Button>
      <Button title='To five' onPress={()=>navigation.navigate('five')}></Button>
      <Button title='To six' onPress={()=>navigation.navigate('six')}></Button>
      <Button title='To seven' onPress={()=>navigation.navigate('seven')}></Button>
      <Button title='To eight' onPress={()=>navigation.navigate('eight')}></Button>
      <Button title='To nine' onPress={()=>navigation.navigate('nine')}></Button>
      <Button title='To ten' onPress={()=>navigation.navigate('ten')}></Button>
      <Button title='To eleven' onPress={()=>navigation.navigate('eleven')}></Button>
    </View>
  );
}
  function firstApp({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text >Page stack{cntStack}</Text>
        <Button title='ВПЕРЕД' onPress={()=>{navigation.push('first');stack_plus()}}></Button>
        <Button title='НАЗАД'  onPress={()=>{navigation.goBack();stack_minus()}}></Button >
      </View>
    );
  }
  function secondApp({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='добавить страницу' onPress={()=>{navigation.push('second2')}}></Button>
        <Button title='убрать страницу'  onPress={()=>{navigation.pop()}}></Button >
        <Button title='НАЗАД'  onPress={()=>{navigation.goBack()}}></Button >
      </View>
    );
  }
  function second_secondApp({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Second screen</Text>
      </View>
    );
  }

  function thirdApp({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {visible?(
        <View>
        <TextInput placeholder="проверка" value={text} onChangeText={onChangeText} ></TextInput>
        <Text style={{marginBottom:10}}>{text}</Text>
        </View>
      ):false
      } 
        <Button title="начать диалог"  onPress={()=>setvisible(!visible)}> </Button>
        <Button title='НАЗАД'  onPress={()=>{navigation.goBack()}}></Button >
      </View>
    );
  }
  function fourApp({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {visible?( 
        <View style={{width:200,height:200,marginBottom:100}}>
        <Text>{startDate}</Text>
        <CalendarPicker onDateChange={setSelectedStartDate}></CalendarPicker>
        </View>
      ):false
      } 
        
        <Button title="начать диалог"  onPress={()=>setvisible(!visible)}> </Button>
        <Button title='НАЗАД'  onPress={()=>{navigation.goBack()}}></Button >
      </View>
    );
  }

  function fiveApp({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {visible?( 
        <View style={{width:200,height:200,marginBottom:100}}>
        <Text>{hours}</Text>
        <Text>{minutes}</Text>
        <TimePicker onChange={handleChange}></TimePicker>
        </View>
      ):false
      }      
        <Button title="начать диалог"  onPress={()=>setvisible(!visible)}> </Button>
        <Button title='НАЗАД'  onPress={()=>{navigation.goBack()}}></Button >
      </View>
    );
  }

function sixApp({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='НАЗАД'  onPress={()=>{navigation.goBack()}}></Button >   
       <Text>{json}</Text>
      </View>
    );
  }

  function sevenApp({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>   
        <Button title="Начать"  onPress={handlePress}> </Button>
        <Button title='НАЗАД'  onPress={()=>{navigation.goBack()}}></Button >
      </View>
    );
  }
  function eightApp({navigation}){
    const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(index === array.length - 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? array.length - 1 : index - 1);
  };
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>   
      <TouchableOpacity onPress={handlePrev}>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <FlatList
        data={[array[index]]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        pagingEnabled={true}
      />
      <TouchableOpacity onPress={handleNext}>
        <Text>{'>'}</Text>
      </TouchableOpacity>
        <Button title='НАЗАД'  onPress={()=>{navigation.goBack()}}></Button >
      </View>
    );
  }

  const nineApp = () => {
    const[selectedobj,setSelectedobj]=useState('Empty');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Dropdown
        data={array2}
        search
        maxHeight={300}
        labelField="event"
        valueField="date"
        placeholder={selectedobj}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setSelectedobj(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign color="black" name="Safety" size={20} />
        )}
        
      />
      <Text style={{marginBottom:50}}>{}</Text>
      </View>
    );
  };

   function tenApp({navigation}){
    const [valueID,setValueID]=useState(0);
    const [objID,setObjID]=useState("");
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
      <MenuProvider>
        <View>
          <Menu>
            <MenuTrigger  onPress={()=>setValueID(0)} style={{borderColor:'red',borderWidth:5,marginBottom:20}} text="Open menu" />
            <MenuTrigger  onPress={()=>setValueID(1)} style={{borderColor:'green',borderWidth:5,marginBottom:20}} text="Set up menu" />
            <MenuTrigger  onPress={()=>setValueID(2)} style={{borderColor:'orange',borderWidth:5,marginBottom:20}} text="bbbbbbbbb" />
            <MenuOptions>
              <MenuOption text="Save" onSelect={() => {setObjID("Save")
              console.log(valueID,objID)}}  />
              <MenuOption onSelect={() => {setObjID("Delete");
                console.log(valueID,objID)}}>
                <Text style={{ color: 'red' }}>Delete</Text>
              </MenuOption>
              <MenuOption
                onSelect={() => {setObjID("Decease");
                  console.log(valueID,objID)}}
                disabled={false}
                text="Disabled"
              />
            </MenuOptions>
          </Menu>
        </View>
      </MenuProvider>
      <Button title='НАЗАД'  onPress={()=>{navigation.goBack()}}></Button >
      </View>
    );
  }

  function elevenApp({navigation}){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title='НАЗАД'  onPress={()=>{navigation.goBack()}}></Button >

       <View style={{height:500,width:300,backgroundColor:'orange'}}>
        <Button title='-' onPress={minus}></Button>
        <Button title='+' onPress={plus}></Button>
        <Text style={{color:"black",position:'absolute',top:0,}}>Count{Count}</Text>
       </View>
      </View>
    );
  }

  return (
    
    <NavigationContainer >
      <Stack.Navigator initialRouteName="HOME">
        <Stack.Screen name="HOME" component={HomeScreen}  />
        <Stack.Screen name="first" component={firstApp}  />
        <Stack.Screen name="second" component={secondApp}/>
        <Stack.Screen name="second2" component={second_secondApp}/>
        <Stack.Screen name="third" component={thirdApp}  />
        <Stack.Screen name="four" component={fourApp}  />
        <Stack.Screen name="five" component={fiveApp}  />
        <Stack.Screen name="six" component={sixApp}  />
        <Stack.Screen name="seven" component={sevenApp}  />
        <Stack.Screen name="eight" component={eightApp}  />
        <Stack.Screen name="nine" component={nineApp}  />
        <Stack.Screen name="ten" component={tenApp}  />
        <Stack.Screen name="eleven" component={elevenApp}  />
        
      </Stack.Navigator>
    </NavigationContainer>
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
