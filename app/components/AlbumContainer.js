import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { RNAndroidAudioStore } from "react-native-get-music-files";

export const AlbumContainer = (props) => {

    const albumArt = props.albumArt === 'null' ? require('../../img/music.png') : {uri: 'file://' + props.albumArt};

    //console.log(albumArt);

    return (

        <TouchableOpacity onPress={() => props.onAlbumPressed({
            albumName: props.title,
            albumArt: albumArt
        })} style={styles.container}>
            <View style={styles.container}>
                <Image source={albumArt} style={styles.album} />
                <Text numberOfLines={1} style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>

    )

}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 2,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    album: {
        flex: 1,
        height: width/2,
        borderRadius: 10,
    },

    text: {
      color: "white",
      textAlign: "center",
      fontFamily: 'ProductSansBold',
      fontSize: 15,
      padding: 5,
      marginBottom: 5,
      alignSelf: 'flex-start',
    }

})