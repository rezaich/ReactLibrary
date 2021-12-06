import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text> App </Text>

                <TouchableOpacity>
                    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={{
                            paddingVertical: 10,
                            marginHorizontal: 10,
                            borderRadius: 5
                        }} >
                        <Text style={{
                            fontSize: 18,
                            fontFamily: 'Gill Sans',
                            textAlign: 'center',
                            margin: 10,
                            color: '#ffffff',
                            backgroundColor: 'transparent',
                        }}>ui</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

export default App;