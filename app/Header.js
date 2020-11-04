import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const Header = (props) => {

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button}>
                <Image source={require('../img/round_keyboard_arrow_down_white_18.png')} />
            </TouchableOpacity>

            <Text style={styles.headerText}>
                {props.title}
            </Text>

            <TouchableOpacity style={styles.button}>
                <Image source={require('../img/round_queue_music_white_18.png')} />
            </TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        height: 70,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 20,
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },

    headerText: {
        flex: 1,
        color: '#fafafa',
        fontSize: 15,
        paddingTop: 5,
        textAlign: 'center'
    },

    button: {
        opacity: 1
    }

})
