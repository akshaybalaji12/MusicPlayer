import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text, Dimensions } from 'react-native';
import { AlbumArt } from '../components/AlbumArt.js';
import { connect } from "react-redux";
import * as actions from "../actions";
import { TrackItem } from '../components/TrackItem';

const AlbumTracksScreen = (props) => {

    const { albumName, albumCover } = props.route.params;
    
    const { width, height } = Dimensions.get('window');

    if(props.songs) {

        return (

            <View style={{
                flex: 1,
                backgroundColor: '#040404',
            }}>
                <ScrollView 
                    stickyHeaderIndices={[2]}
                    contentContainerStyle={{
                                backgroundColor: '#040404',
                                alignItems: 'center'
                            }} style={{ flex : 1, width: width}}>
                    <AlbumArt albumURI={albumCover} imageSize={width/2}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.textAlbum}>
                            {albumName}
                        </Text>
                        <Text style={styles.textTracks}>
                            {props.songs.length + ' Tracks'}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.playButton}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.playText}>
                                Play
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.container}>
                        {props.songs.map(track => {

                            return (

                                <TrackItem key={track.id} title={track.title} artist={track.artist} albumCover={albumCover} />

                            )

                        })}
                    </View>
                </ScrollView>
            </View>
    
        )

    } else {

        return (

            <View style={styles.container}>
                <Text style={{color: 'white'}}>Fetching</Text>
            </View>

        )

    }

}

function mapStateToProps(state) {
    return {
        songs: state.media.queue,
    };
}

export default connect(
    mapStateToProps,
    actions
)(AlbumTracksScreen);

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#040404',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    textContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    textAlbum: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'ProductSansBold'
    },

    textTracks: {
        color: '#bbb',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'ProductSansBold',
        margin: 5
    },

    playButton: {
        width: 100,
        height: 40,
        borderRadius: 20,
        borderColor: '#4acfac',
        backgroundColor: '#4acfac',
        justifyContent: 'center',
        margin: 5,
        marginTop: 10
    },

    playText: {
        color: '#fff',
        fontFamily: 'ProductSansBold',
        fontSize: 20
    },

})