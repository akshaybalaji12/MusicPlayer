import React from 'react';
import { View, Text } from 'react-native';
import { Header } from './Header.js';

export default class App extends React.Component {

    render() {

        return (

            <View style={{flex: 1, backgroundColor: '#040404'}}>
                <Header title="Playing from Album"/>
            </View>

        )

    }

}