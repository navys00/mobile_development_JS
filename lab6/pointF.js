
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const PointF = () => {
  const [rectangles, setRectangles] = useState([]);

  const addRectangle = () => {
    const newRectangles = [...rectangles, {}];
    setRectangles(newRectangles);
  };

  const removeRectangle = (index) => {
    const newRectangles = [...rectangles];
    newRectangles.splice(index, 1);
    setRectangles(newRectangles);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Rectangle" onPress={addRectangle} />
      {rectangles.map((_, index) => (
        <TouchableOpacity key={index} style={styles.rectangle} onPress={() => removeRectangle(index)}>
          <Text style={styles.rectangleText}>{index + 1}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  rectangle: {
    backgroundColor: 'red',
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleText: {
    color: 'white',
    fontSize: 20,
  },
});

export default PointF;