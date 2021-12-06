import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    showToast = () => {
        Toast.show({
            text1: 'Hello',
            text2: 'This is some something 👋',
            type: 'info',
            visibilityTime: 3000
        });
    }

    render() {
        return (
            <View>
                <Toast ref={(ref) => Toast.setRef(ref)} />
                <TouchableOpacity onPress={() => this.showToast()}>
                    <Text> hello World  </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
