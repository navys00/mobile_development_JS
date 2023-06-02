import React, { useState, useEffect,useRef } from 'react';
import { View, StyleSheet, Image, Animated,TouchableOpacity } from 'react-native';

const String_degrees = () => {
  const [isPressed, setIsPressed] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  
  const handlePress = () => {
    setIsPressed(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
        handlePress2();
      //setIsPressed(false);
      //animatedValue.setValue(0);
    });
  };

  const handlePress2 = () => {
    setIsPressed(false);
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      //setIsPressed(false);
      //animatedValue.setValue(0);
    });
  };
  
  const interpolateColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['black', 'red'],
  });

  const interpolateColor2 = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['red', 'black'],
  });
  
  const interpolate180 = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const interpolate360 = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });
  
  const animatedStyle = {
    transform: [{ translateY: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200],
    })}, { rotate: interpolate180, }],
    color: interpolateColor,
  };
  const animatedStyle2 = {
    transform: [{ translateY: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 0],
    })}, { rotate: interpolate360, }],
    color: interpolateColor2,
  };
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.Text style={[{ fontSize: 24 }, animatedStyle]}>
          HELLO WORLD 
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  light: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 20,
  },
  person: {
    position: 'absolute',
    bottom: 10,
  },
});

export default String_degrees;