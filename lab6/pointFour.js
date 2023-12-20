import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const PointFour = () => {

  const [data, setData] = useState("");

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.cbr-xml-daily.ru/daily_json.js");
    xhr.onload = () => {
      setData(xhr.responseText);
    };
    xhr.onerror = (error) => {
      console.log(error);
    };
    xhr.send();
  }, []);


  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
}

export default PointFour;