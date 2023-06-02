import React from 'react';
import { View, Button } from 'react-native';

const Button_component = ({ title, color = 'blue', onPress }) => {
        return <Button title={title} color={color} onPress={onPress} />;     
};

export default Button_component;