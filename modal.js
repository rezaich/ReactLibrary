import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal isVisible={this.state.modalOpen}>
          <View style={{ flex: 1, borderRadius: 10, padding: 10, backgroundColor: '#fff' }}>
            <Text>I am the modal content!</Text>
            <TouchableOpacity onPress={() => this.setState({ modalOpen: false })}>
              <Text>Close Modal</Text>
            </TouchableOpacity >
          </View>
        </Modal>
        <TouchableOpacity onPress={() => this.setState({ modalOpen: true })}>
          <Text>Open Modal</Text>
        </TouchableOpacity >
      </View >
    );
  }
}
