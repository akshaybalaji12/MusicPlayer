import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export const Seekbar = (props) => {

    return( 

        <View style={styles.container}>
            <TouchableHighlight>
                <Text>Hello</Text>
            </TouchableHighlight>
        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        height: 50,
        flexDirection: 'row'
    }

})

//<Slider style={{flex: 1}} minimumTrackTintColor='#fff' maximumTrackTintColor='rgba(255,255,255,0.14)'/>