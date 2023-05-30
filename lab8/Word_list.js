import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';

class Word_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newWord: ''
    };
  }

  addWord = () => {
    const newData = [...this.state.data, this.state.newWord.toLowerCase()];
    this.setState({ data: newData, newWord: '' });
  }

  removeLastWord = () => {
    const newData = this.state.data.slice(0, -1);
    this.setState({ data: newData });
  }

  renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item}</Text>
    </View>
  );

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
          onChangeText={(text) => this.setState({ newWord: text })}
          value={this.state.newWord}
        />
        <TouchableOpacity onPress={() => this.addWord()}>
          <Text style={{ backgroundColor: 'green', color: 'white', padding: 10, margin: 10, borderRadius: 10 }}>Add Word</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.removeLastWord()}>
          <Text style={{ backgroundColor: 'red', color: 'white', padding: 10, margin: 10, borderRadius: 10 }}>Remove Last Word</Text>
        </TouchableOpacity>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Word_list;