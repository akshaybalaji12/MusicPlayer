import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import { AlbumArt } from '../components/AlbumArt.js';

export const AlbumTracksScreen = (props) => {

    return (

        <View style={styles.container}>
            <AlbumArt album = 'Vaaranam Aayiram'/>
            <View style={styles.textContainer}>
                <Text style={styles.textAlbum}>
                    Vaaranam Aayiram
                </Text>
                <Text style={styles.textTracks}>
                    8 tracks
                </Text>
            </View>
            <TouchableOpacity style={styles.playButton}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.playText}>
                        Play
                    </Text>
                </View>
            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#040404',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    textContainer: {
        height: 80,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    textAlbum: {
        flex: 1,
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        fontFamily: 'ProductSansBold'
    },

    textTracks: {
        flex: 1,
        color: '#bbb',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'ProductSansBold'
    },

    playButton: {
        width: 100,
        height: 40,
        borderRadius: 20,
        borderColor: '#4acfac',
        backgroundColor: '#4acfac',
        justifyContent: 'center',
        margin: 2
    },

    playText: {
        color: '#fff',
        fontFamily: 'ProductSansBold',
        fontSize: 20
    }

})