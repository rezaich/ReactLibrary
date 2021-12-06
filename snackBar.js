import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Snackbar from 'react-native-snackbar';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    showNotification = () => {
        Snackbar.show({
            text: 'Hello world',
            duration: Snackbar.LENGTH_SHORT,
            action: {
                text: 'UNDO',
                textColor: 'green',
                onPress: () => {
                },
            },
        });
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => this.showNotification()}>
                    <Text> Hello world </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
