import React, { Component } from 'react';
import { View, Text } from 'react-native';
var Spinner = require('react-native-spinkit');

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> App </Text>
                <Spinner
                    style={{ marginBottom: 50 }}
                    isVisible={true}
                    size={100}
                    type={'CircleFlip'}
                    color={'#212121'} />
            </View>
        );
    }
}
