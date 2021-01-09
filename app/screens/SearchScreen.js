import React, { useState, useRef } from 'react';
import { View, TextInput, Image, FlatList, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { AlbumContainer } from '../components/AlbumContainer';
import { TrackItem } from '../components/TrackItem';

const SearchScreen = (props) => {

    const [searchInput, setSearchInput ] = useState('');
    const [isFocus, setFocus] = useState(false);
    const { albums, tracks } = props;
    const { width } = Dimensions.get('window');
    const searchText = useRef();

    let searchResults = {

        albums: [],
        tracks: [],
        isEmpty: true

    }

    if(searchInput) {

        let filteredTracks = tracks.filter(trackObject => {
            return trackObject.title.toLowerCase().includes(searchInput.toLowerCase())
        });

        console

        let filteredAlbums = albums.filter(albumObject => {
            return albumObject.album.toLowerCase().includes(searchInput.toLowerCase())
        });

        let isEmpty = filteredAlbums.length > 0 || filteredTracks.length > 0;

        searchResults.albums = filteredAlbums;
        searchResults.tracks = filteredTracks;
        searchResults.isEmpty = isEmpty;

        console.log(searchResults);

    }

    function onClosePressed() {
        setFocus(false);
        setSearchInput('');
        searchText.current.blur();
    }

    const CloseIcon = () => {
        return (
            <TouchableOpacity onPress={onClosePressed}>
                <Image
                    source={require('../../img/round_close_black_18.png')}
                    style={styles.closeIcon}
                />
            </TouchableOpacity>            
        )
    }

    const ResultsView = () => {

        return(

            <View style={{flex: 1}}>
                <Text style={styles.titleText}>Albums</Text>
                <FlatList 
                    style={{marginTop: 10, height: (width/2), flexGrow: 0}}
                    horizontal={true}
                    data={searchResults.albums}
                    renderItem={({item}) => (
                        <AlbumContainer onAlbumPressed={() => {console.log(item.album)}} albumArt={item.cover} title={item.album}/>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    />

                <View style={{width: (width/2), height: 0.5, opacity: 0.5, backgroundColor: '#4acfac', alignSelf: 'center', marginTop: 10, marginBottom: 20}} />

                <Text style={styles.titleText}>Tracks</Text>                
                <FlatList 
                    style={{marginTop: 10, flex: 1}}
                    data={searchResults.tracks}
                    renderItem={({item}) => (
                        <TrackItem title={item.title} artist={item.author} albumCover={item.cover} />
                    )}
                    keyExtractor={(item, index) => 'Key'+item.duration+index}
                />
            </View>

        )

    }

    return (

        <View style={styles.container}>
            <View style={{
                ...styles.searchContainer,
                backgroundColor: isFocus ? '#4acfac' : 'transparent',
            }}>
                <Image
                    source={require('../../img/round_search_white_18.png')}
                    style={{
                        ...styles.searchIcon,
                        tintColor: isFocus ? '#fff' : '#4acfac'
                    }}
                />

                <TextInput
                    ref={searchText}
                    style={{ flex: 1, color: '#fafafa' }}
                    placeholder="Search for tracks or albums"
                    placeholderTextColor= {isFocus ? '#fff' : '#D7D7D8'}
                    fontFamily='ProductSansBold'
                    allowFontScaling={false}
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => setSearchInput(text)}
                    value={searchInput}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                />

                {isFocus ? <CloseIcon /> : null}
            </View>
            {(searchInput) ? <ResultsView /> : null}
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
    },

    closeIcon: {
        padding: 10,
        margin: 19,
        height: 12,
        width: 12,
        resizeMode: 'stretch',
        alignItems: 'center',
        tintColor: '#fff'
    },

    titleText: {
        alignSelf: 'flex-start',
        marginStart: 18,
        marginBottom: 2,
        color: '#fff',
        fontFamily: 'ProductSansBold',
        fontSize: 20
    }

})