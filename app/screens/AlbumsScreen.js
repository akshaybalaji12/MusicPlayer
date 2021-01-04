import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Text, Image, TextInput } from 'react-native';
import { AlbumContainer } from '../components/AlbumContainer';
import { connect } from "react-redux";
import * as actions from "../actions";
import { useEffect } from 'react';

const AlbumsScreen = (props) => {

    useEffect(() => {
        props.getMedia();
    }, []);

    function onAlbumPressed(albumSelected) {

        props.getSongs(albumSelected.album);
        props.navigation.navigate('album', { albumName: albumSelected.album, albumCover: albumSelected.cover })

    }
    
    if(props.mediaLoaded) {

        return(

            <View style={styles.container}>
                <FlatList 
                    numColumns={2}
                    data={props.albums}
                    renderItem={({item}) => (
                        <AlbumContainer onAlbumPressed={() => onAlbumPressed(item)} albumArt={item.cover} title={item.album}/>
                    )}
                    keyExtractor={(item, index) => index}
                />
            </View>
    
        )

    }
    return(

        <View style={styles.container}>
            <Text style={{color: 'white'}}>Fetching</Text>
        </View>

    )
}

function mapStateToProps(state) {
    return {
        albums: state.media.albums,
        mediaLoaded: state.media.mediaLoaded,
        tracks: state.media.tracks
    };
}

export default connect(
    mapStateToProps,
    actions
)(AlbumsScreen);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#121212',
    },

    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#4acfac',
        height: 50,
        borderRadius: 25,
        margin: 15
    },

    searchIcon: {
        padding: 10,
        margin: 12.5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        tintColor: '#4acfac'
    }

})