import { checkStoragePermissions, getStoragePermission } from '../utilities';
import { RNAndroidAudioStore } from "react-native-get-music-files";
import { GET_MUSIC_ALBUMS } from '../constants/action-types';
import _ from 'underscore';
import { store } from '../store';

const options = {
    title: true,
    artist: true,
    album: true,
    duration: true,
    cover: false,
    blured: false
};

export const getMedia = () => async (dispatch) => {

    try{

        let isPermissionGranted = await checkStoragePermissions();
        if(!isPermissionGranted) await getStoragePermission();

        let tracks = await RNAndroidAudioStore.getAll(options);
        let albums = await RNAndroidAudioStore.getAlbums({ artist: '' });
        let sortedAlbum = _.sortBy(albums, 'album');
        let uniqueAlbums = sortedAlbum.filter((set => f => !set.has(f.album) && set.add(f.album))(new Set));
        let mediaPayload = { albums: uniqueAlbums, tracks: tracks, queue: [] };
        dispatch({ type: GET_MUSIC_ALBUMS, payload: mediaPayload });
        
    } catch(e) {
        console.log('Get Media Error - ' + e);
    }

}

export const getSongs = (albumName) => async (dispatch) => {

    let { media } = store.getState();

    let albums = media.albums;
    let tracks = media.tracks;
    let songs = await RNAndroidAudioStore.getSongs({album: albumName});
    let albumSongs = [];

    songs.map((track) => {

        if(track.album === albumName)
            albumSongs.push(track);

    });

    let mediaPayload = { albums: albums, tracks: tracks, queue: albumSongs };
    dispatch({ type: GET_MUSIC_ALBUMS, payload: mediaPayload });

}