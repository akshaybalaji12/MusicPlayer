import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { TrackItem } from '../components/TrackItem';

const TracksScreen = (props) => {

    const { tracks, albums } = props;

    tracks.map((track) => {

        let trackAlbum = albums.find(function(albumObject) {
            return albumObject.album === track.album;
        })

        track['cover'] = trackAlbum.cover;

    });

    if(tracks.length > 0) {

        return(

            <View style={{
                flex: 1,
                justifyContent: 'center',
                backgroundColor: '#121212',
            }}>
                <FlatList 
                    data={props.tracks}
                    renderItem={({item}) => (
                        <TrackItem title={item.title} artist={item.author} albumCover={item.cover} />
                    )}
                    keyExtractor={(item, index) => 'Key'+item.duration+index}
                />
            </View>
    
        )


    }


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
)(TracksScreen);