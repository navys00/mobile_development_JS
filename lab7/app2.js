import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';

const TrafficLightApp = () => {
  const [light, setLight] = useState('red');
  const [personPosition, setPersonPosition] = useState(
    new Animated.ValueXY({ x: -50, y: 0 })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (light === 'red') {
        setLight('yellow');
      } else if (light === 'yellow') {
        setLight('green');
        movePerson();
      } else {
        setLight('red');
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [light]);

  const movePerson = () => {
    Animated.timing(personPosition, {
      toValue: { x: 200, y: 0 },
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      setPersonPosition(new Animated.ValueXY({ x: -50, y: 0 }));
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.light,
          { backgroundColor: light === 'red' ? 'red' : 'grey' },
        ]}
      />
      <View
        style={[
          styles.light,
          { backgroundColor: light === 'yellow' ? 'yellow' : 'grey' },
        ]}
      />
      <View
        style={[
          styles.light,
          { backgroundColor: light === 'green' ? 'green' : 'grey' },
        ]}
      >
        {light === 'green' && (
          <Animated.View
            style={[
              styles.person,
              { transform: personPosition.getTranslateTransform() },
            ]}
          >
            <Image
              source={require('./assets/favicon.png')}
              style={{ width: 50, height: 50 }}
            />
          </Animated.View>
        )}
      </View>
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

export default TrafficLightApp;