import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions, Text } from 'react-native';

export const AlbumContainer = (props) => {

    const albumArt = props.albumArt === 'null' ? require('../../img/music.png') : {uri: 'file://' + props.albumArt};
    //console.log(albumArt);

    return (

        <View style={styles.container}>
            <ImageBackground source={albumArt} style={styles.album}>
                <Text style={styles.text}>{props.title}</Text>
            </ImageBackground>
        </View>

    )

}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: width/2,
        margin: 2,
    },

    album: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

    text: {
      color: "white",
      textAlign: "center",
      backgroundColor: "#000000a0",
      fontFamily: 'AvantGarde',
      fontSize: 18,
      padding: 10
    }

})