import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const apiKey = '711c6cfefbe0bc5399c3ebacd57965c2';
const apiURL = 'http://ws.audioscrobbler.com/2.0/?method=album.search&album=';

export const AlbumArt = (props) => {

    return (

        <View style={{
            padding: 20,
        }}>
            <TouchableOpacity>
                <Image 
                    source={{uri: 'file://'+props.albumURI}} 
                    style={{
                        width: props.imageSize,
                        height: props.imageSize,
                        alignSelf: 'center',
                }} />
            </TouchableOpacity>
        </View>

    )

}

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>