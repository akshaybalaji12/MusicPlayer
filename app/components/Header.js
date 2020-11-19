import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const Header = (props) => {

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={props.onClosePressed}>
                <Image style={styles.button} source={require('../../img/round_keyboard_arrow_down_white_18.png')} />
            </TouchableOpacity>

            <View>
                <Text style={styles.textTitle}>
                    PLAYING FROM
                </Text>

                <Text style={styles.textAlbum}>
                    {props.title}
                </Text>
            </View>

            <TouchableOpacity>
                <Image style={styles.button} source={require('../../img/round_queue_music_white_18.png')} />
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
        flexWrap: 'nowrap',
        justifyContent: 'space-between'
    },

    textContainer: {
        height: 70,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    textTitle: {
        flex: 1,
        color: '#fafafa',
        fontSize: 12,
        paddingTop: 5,
        textAlign: 'center',
        fontFamily: 'AvantGarde'
    },

    textAlbum: {
        flex: 1,
        color: '#fafafa',
        fontSize: 15,
        paddingTop: 2,
        textAlign: 'center',
        fontFamily: 'AvantGarde'
    },

    button: {
        opacity: 1,
        height: 30,
        width: 30
    }

})
