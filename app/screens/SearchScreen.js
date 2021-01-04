import React, { useState } from 'react';
import { View, TextInput, Image, ScrollView, StyleSheet } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

const SearchScreen = (props) => {

    const [searchInput, setSearchInput ] = useState('');
    const [isFocus, setFocus] = useState(false);
    const { albums, tracks } = props;

    if(searchInput) {

        let filteredTracks = tracks.filter(trackObject => {
            return trackObject.title.toLowerCase().includes(searchInput.toLowerCase())
        });

        console

        let filteredAlbums = albums.filter(albumObject => {
            return albumObject.album.toLowerCase().includes(searchInput.toLowerCase())
        });

        let searchResults = {
            albums: filteredAlbums,
            tracks: filteredTracks
        };

        console.log(searchResults);

    }

    return (

        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Image
                    source={require('../../img/round_search_white_18.png')} //Change your icon image here
                    style={styles.searchIcon}
                />

                <TextInput
                    style={{ flex: 1, color: '#fafafa' }}
                    placeholder="Search for tracks or albums"
                    placeholderTextColor='#D7D7D8'
                    fontFamily='ProductSansBold'
                    allowFontScaling={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => setSearchInput(text)}
                    value={searchInput}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />
            </View>
        </View>

    )

}

function mapStateToProps(state) {
    return {
        albums: state.media.albums,
        tracks: state.media.tracks
    };
}

export default connect(
    mapStateToProps,
    actions
)(SearchScreen);

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
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