import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

export const AlbumContainer = (props) => {

    const albumArt = props.albumArt === 'null' ? require('../../img/music.png') : {uri: 'file://' + props.albumArt};

    return (

        <TouchableOpacity onPress={props.onAlbumPressed} style={styles.container}>
            <View style={styles.albumView}>
                <Image source={albumArt} style={styles.album} />
                <Text numberOfLines={1} style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>

    )

}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        width: (width/2),
        flexDirection: 'column',
        padding: 5
    },

    albumView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },

    album: {
        flex: 1,
        height: (width/2) - 10,
        width: (width/2 - 10),
        borderRadius: 10,
        alignSelf: 'center',
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