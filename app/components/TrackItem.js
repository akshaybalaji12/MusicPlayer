import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AlbumArt } from './AlbumArt';

export const TrackItem = (props) => {

    const { title, artist, albumCover } = props;

    return (

        <View style={styles.container}>
            <AlbumArt style={styles.albumArt} albumURI={albumCover} imageSize={50} />
            <View style={styles.trackContainer}>
                <Text numberOfLines={1} style={{ fontFamily: 'ProductSansBold', color: '#fff', fontSize: 16 }}>{title}</Text>
                <Text numberOfLines={1} style={{ fontFamily: 'ProductSansBold', color: '#bbb', fontSize: 14 }}>{artist}</Text>
            </View>
            <TouchableOpacity style={styles.optionsIcon}>
                <Image style={{ height: 30, width: 30 }} source={require('../../img/round_more_vert_white_18.png')} />
            </TouchableOpacity>
        </View>

    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    trackContainer: {
        flex: 1,
        height: 70,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },

    albumArt: {
        margin: 10
    },
    
    optionsIcon: {
        height: 30,
        width: 30,
        margin: 20
    }

});