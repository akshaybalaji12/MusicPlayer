import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import * as actions from "../actions";
import { useEffect } from 'react';

const PlaylistScreen = (props) => {

    const { playlists } = props;
    const title = 'Playlist'
    
    function onCreatePlaylist(playlistTitle) {

        let keys = Object.keys(playlists);
        let index = keys.indexOf(playlistTitle);
        if(index === -1) {
            props.createPlaylist(playlistTitle);
        } else {
            console.log("Playlist already present");
        }

    }

    return (

        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <TouchableOpacity style={styles.newPlaylistContainer} onPress={() => onCreatePlaylist(title)}>
                    <View style={styles.newPlaylistView}>
                        <Text
                            style={{
                                color: '#fff',
                                fontFamily:'ProductSansBold',
                                fontSize: 20
                            }}
                        >
                            Create new playlist
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.favContainer}>
                    <View style={styles.favView}>
                        <Image
                            source={require('../../img/round_favorite_white_18.png')} //Change your icon image here
                            style={styles.favIcon}
                        />

                        <Text
                            style={{
                                color: '#fff',
                                fontFamily:'ProductSans',
                                fontSize: 20
                            }}
                        >
                            Favourites
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>

    )

}

function mapStateToProps(state) {
    return {
        playlists: state.playlists,
        favorites: state.playlists.favorites
    };
}

export default connect(
    mapStateToProps,
    actions
)(PlaylistScreen);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#121212',
    },

    favView: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    favContainer: {
        backgroundColor: '#121212',
        height: 50,
        margin: 5,
    },

    favIcon: {
        padding: 5,
        margin: 15,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        tintColor: '#4acfac'
    },

    newPlaylistView: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    newPlaylistContainer: {
        backgroundColor: '#4acfac',
        height: 50,
        margin: 15,
        width: 250,
        borderRadius: 25,
        borderColor: '#4acfac',
        alignSelf: 'center'
    },

    newPlaylistIcon: {
        padding: 5,
        margin: 15,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
        tintColor: '#fff'
    },

})