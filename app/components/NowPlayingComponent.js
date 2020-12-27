import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Dimensions } from 'react-native';

export const NowPlayingComponent = (props) => {

    return (

        <View style={styles.container}>

            <TouchableHighlight onPress={props.onPress}>

                <View style={styles.touchableContainer}>
                    <View style={styles.trackContainer}>
                        <Image style={styles.albumArt} source={{uri: "file:///storage/emulated/0/Android/data/com.android.providers.media/albumthumbs/1530346851674"}} style={styles.albumArt} />
                        <View style={styles.trackInfo}>
                            <Text numberOfLines={1} style={styles.trackName}>Adiyae Kolluthey (From 'Vaaranam Aayiram')</Text>
                            <Text numberOfLines={1} style={styles.trackArtist}>Benny Dayal, Krish, Shruti Hassan</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Image style={styles.button} source={require('../../img/round_play_arrow_white_18.png')} />
                    </TouchableOpacity>
                </View>

            </TouchableHighlight>
            
        </View>

    )

}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        height: 75,
        borderTopColor: '#4acfac',
        borderWidth: 0.5,
        paddingStart: 15,
        paddingEnd: 15,
    },

    touchableContainer: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },


    trackContainer: {
        width: width*0.7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    albumArt: {
        height: 60,
        width: 60,
        paddingEnd: 5,
        borderRadius: 5
    },

    trackInfo: {
        paddingStart: 10,
        paddingEnd: 10
    },

    trackName: {
        fontFamily: 'ProductSansBold',
        fontSize: 15,
        textAlign: 'left',
        color: '#fff',
    },

    trackArtist: {
        fontFamily: 'ProductSansBold',
        fontSize: 12,
        textAlign: 'left',
        color: '#bbb',
    },

    button: {
        opacity: 1,
        height: 40,
        width: 40,
        alignSelf: 'center',
        tintColor: '#fff'
    }

})