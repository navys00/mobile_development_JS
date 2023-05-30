import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

class String_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data || []
    };
  }

  addString = (string) => {
    const newData = [...this.state.data, string];
    this.setState({ data: newData });
  }

  removeLastString = () => {
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
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity onPress={() => this.addString('New string')}>
          <Text style={{ backgroundColor: 'green', color: 'white', padding: 10, margin: 10, borderRadius: 10 }}>Add String</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.removeLastString()}>
          <Text style={{ backgroundColor: 'red', color: 'white', padding: 10, margin: 10, borderRadius: 10 }}>Remove Last String</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default String_list;