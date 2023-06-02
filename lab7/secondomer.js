import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  let formattedHours = hours.toString().padStart(2, '0');
  let formattedMinutes = minutes.toString().padStart(2, '0');
  let formattedSeconds = seconds.toString().padStart(2, '0');
  

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export default function Secondomer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  function handleStartStop() {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - time * 1000;
      intervalRef.current = setInterval(() => {
        setTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    setIsRunning(!isRunning);
  }

  function handleReset() {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 48 }}>{formatTime(time)}</Text>
      <TouchableOpacity
        style={{
          backgroundColor: isRunning ? 'red' : 'green',
          padding: 20,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={handleStartStop}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>
          {isRunning ? 'Stop' : 'Start'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'gray',
          padding: 20,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={handleReset}
      >
        <Text style={{ color: 'white', fontSize: 24 }}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
