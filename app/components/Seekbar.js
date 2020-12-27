import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Slider from '@react-native-community/slider';

export const Seekbar = (props) => {

    return( 

        <View style={styles.container}>
            <View style={styles.timer}>
                <Text style={styles.timerText}>
                    0:00
                </Text>
                <Text style={styles.timerText}>
                    3:45
                </Text>
            </View>
            <TouchableHighlight style={styles.slider}>
                <Slider thumbTintColor='#fff' maximumTrackTintColor='rgba(255,255,255,0.75)' minimumTrackTintColor='#fff' />
            </TouchableHighlight>
        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        height: 50,
        margin: 20
    },

    timer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        padding: 10
    },

    timerText: {
        color: '#fff',
        fontFamily: 'ProductSansBold'
    },

    slider: {
        flex: 1,
    }

})

//<Slider style={{flex: 1}} minimumTrackTintColor='#fff' maximumTrackTintColor='rgba(255,255,255,0.14)'/>