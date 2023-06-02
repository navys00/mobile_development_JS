import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

class Word_list2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newWord: '',
      count:0
    };
  }
  


  addWord = () => {
    const newData = [...this.state.data, this.state.newWord.toLowerCase()];
    this.setState({ data: newData, newWord: '',count: this.state.count + 1});
  }

  removeLastWord = () => {
    const newData = this.state.data.slice(0, -1);
    this.setState({ data: newData,count: this.state.count - 1 });
  }

  renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item}</Text>
    </View>
  );

  get allWords() {
    
    return this.state.data.map((word, index) => {
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    }).join(', ');
  }
  
  render() {
    

    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
          onChangeText={(text) => this.setState({ newWord: text })}
          value={this.state.newWord}
        />
        <TouchableOpacity onPress={() => {this.addWord()}}>
          <Text style={{ backgroundColor: 'green', color: 'white', padding: 10, margin: 10, borderRadius: 10 }}>Add Word</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.removeLastWord()}>
          <Text style={{ backgroundColor: 'red', color: 'white', padding: 10, margin: 10, borderRadius: 10 }}>Remove Last Word</Text>
        </TouchableOpacity>
        <Text style={{ margin: 10 }}>All Words: {this.allWords}</Text>
        <Text style={{ margin: 10 }}>Count {this.state.count}</Text>
        
      </View>
    );
  }
}

export default Word_list2;