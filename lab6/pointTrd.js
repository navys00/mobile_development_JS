import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const API_URL = 'https://jsonplaceholder.typicode.com/todos/2';
const API_URL2 = 'https://www.cbr-xml-daily.ru/daily_json.js';
const requset = new XMLHttpRequest();
const PointTrd = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(API_URL2)
        .then(response => response.json())
        .then(json => setData(json.Valute.AUD))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <View style={styles.container}>   
          <Text style={styles.text}>{JSON.stringify(data,["Name","Value"])}</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

export default PointTrd;