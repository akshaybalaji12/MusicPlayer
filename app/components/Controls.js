import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export const Controls = (props) => {

    return(

        <View style={styles.container}>

            <TouchableOpacity>
                <Image style={styles.trackControls} source={require('../../img/round_shuffle_white_18.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.button} source={require('../../img/round_skip_previous_white_48.png')} />
            </TouchableOpacity>

            {props.isPaused ?

                <TouchableOpacity onPress={props.onPlayToggle}>
                    <Image style={styles.playButton} source={require('../../img/round_play_circle_outline_white_48.png')} />
                </TouchableOpacity>

                :

                <TouchableOpacity onPress={props.onPlayToggle}>
                    <Image style={styles.playButton} source={require('../../img/round_pause_circle_outline_white_48.png')} />
                </TouchableOpacity>
            }

            <TouchableOpacity>
                <Image style={styles.button} source={require('../../img/round_skip_next_white_48.png')} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image style={styles.trackControls} source={require('../../img/round_repeat_white_18.png')} />
            </TouchableOpacity>

        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    playButton: {
        height: 70,
        width:70,
        opacity:1,
    },

    button: {
        height: 50,
        width: 50,
        opacity: 1
    },

    trackControls: {
        height: 25,
        width: 25,
        opacity: 1,
        tintColor: '#fafafa'
    },

    trackControlsToggled: {
        height: 25,
        width: 25,
        opacity: 1,
        tintColor: '#bc6ff1'
    }

})