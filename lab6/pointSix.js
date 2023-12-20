import React, { useState, useEffect } from 'react';
import { View, Text, CheckBox } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PointSix = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    async function getCheckboxValue() {
      try {
        const value = await AsyncStorage.getItem('checkboxValue');
        if (value !== null) {
          setIsChecked(JSON.parse(value));
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCheckboxValue();
  }, []);

  const handleCheckboxChange = async (isChecked) => {
    try {
      await AsyncStorage.setItem('checkboxValue', JSON.stringify(isChecked));
      setIsChecked(isChecked);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Checkbox value: {isChecked ? 'true' : 'false'}</Text>
      <CheckBox value={isChecked} onValueChange={handleCheckboxChange} />
    </View>
  );
};

export default PointSix;