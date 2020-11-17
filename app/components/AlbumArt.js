import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

//{uri:"file:///storage/emulated/0/Pictures/invisibleCunt.jpg"}
//require('../../img/music.png')

const apiKey = '711c6cfefbe0bc5399c3ebacd57965c2';
const apiURL = 'http://ws.audioscrobbler.com/2.0/?method=album.search&album=';

export const AlbumArt = (props) => {

    const [albumArt, setAlbumArt] = useState('');

    useEffect(() => {

        fetch(apiURL+props.album+'&api_key='+apiKey+'&format=json')
        .then(response => response.json())
        .then(data => {
            const imageData = data.results.albummatches.album[0].image[3]['#text'];
            setAlbumArt(imageData);
        })

    })

    return (

        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={{uri: "file:///storage/emulated/0/Android/data/com.android.providers.media/albumthumbs/1530346851674"}} style={styles.albumArt} />
            </TouchableOpacity>
        </View>

    )

}

const { width, height } = Dimensions.get('window');
const imageSize = width - 100;

const styles = StyleSheet.create({

    container: {
        padding: 20,
    },

    albumArt: {
        width: imageSize,
        height: imageSize,
        alignSelf: 'center'
    }

})

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>