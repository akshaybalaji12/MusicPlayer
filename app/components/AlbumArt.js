import React from 'react';
import { View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

export const AlbumArt = (props) => {

    return (

        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.albumArt} source={require('../../img/music.png')}/>
            </TouchableOpacity>
        </View>

    )

}

const { width, height } = Dimensions.get('window');
const imageSize = width - 100;

const styles = StyleSheet.create({

    container: {
        padding: 24,
        margin: 20
    },

    albumArt: {
        width: imageSize,
        height: imageSize,
        alignSelf: 'center',
        margin: 10
    }

})

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>