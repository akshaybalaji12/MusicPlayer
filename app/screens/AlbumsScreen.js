import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Text, Image, TextInput } from 'react-native';
import { AlbumContainer } from '../components/AlbumContainer';
import { connect } from "react-redux";
import * as actions from "../actions";
import { useEffect } from 'react';

const AlbumsScreen = (props) => {

    useEffect(() => {
        console.log(props.mediaLoaded);
        props.getMedia();
    }, []);

    
    // <TouchableOpacity>
    //     <Image style={styles.button} source={require('../../img/round_search_white_18.png')} />
    // </TouchableOpacity>

    if(props.mediaLoaded) {

        return(

            <View style={styles.container}>
                {/* <View style={styles.searchContainer}>
                    <Image
                        source={require('../../img/round_search_white_18.png')} //Change your icon image here
                        style={styles.searchIcon}
                    />
    
                    <TextInput
                        style={{ flex: 1, color: '#fafafa' }}
                        placeholder="Search"
                        placeholderTextColor='#D7D7D8'
                        fontFamily='ProductSansBold'
                        underlineColorAndroid="transparent"
                    />
                </View> */}
                <FlatList 
                    data={props.albums}
                    renderItem={({item}) => (
                        <AlbumContainer onAlbumPressed={props.onAlbumPressed} albumArt={item.cover} title={item.album}/>
                    )}
                    numColumns={2}
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
        mediaLoaded: state.media.mediaLoaded
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