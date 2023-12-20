import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';


const PointFive = () => {
    const [text,Settext]=useState('');
    const [data, setData] = useState([]);

      const addString =()=>{
        setData([
        ...data,
        {
        id:data.length+1,
        title:text
        }
        ])
        Settext('');
      }
      const Delete=(id)=>{
        setData(data.filter((item)=>item.id!==id));
      }
      const renderItem = ({ item }) => (
        <View>
        <TouchableOpacity style={{borderWidth:2,borderColor:'red'}} onPress={()=>Delete(item.id)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
        </View>
      );
  return (
    <View>
    <TextInput style={{borderColor:'black',borderWidth:5}} value={text} onChange={(e)=>Settext(e.target.value)}></TextInput>
    <Button title='Button' onPress={addString}></Button>
    <FlatList
      data={data}
      renderItem={renderItem}
      
    />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  rectangle: {
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleText: {
    fontSize: 20,
  },
});

export default PointFive;