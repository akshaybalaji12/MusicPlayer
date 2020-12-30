import { checkStoragePermissions, getStoragePermission } from '../Utilities';
import { RNAndroidAudioStore } from "react-native-get-music-files";
import store from '../store';
import { GET_MUSIC_ALBUMS } from '../constants/action-types';

export const getMedia = () => async (dispatch) => {

    try{

        let isPermissionGranted = await checkStoragePermissions();
        if(!isPermissionGranted) await getStoragePermission();

        let { media } = store.getState();

        if(media.mediaLoaded) {
            dispatch({ type: GET_MUSIC_ALBUMS, payload: media });
        } else {

            let albums = await RNAndroidAudioStore.getAlbums({ artist: '' });
            let albumPayload = { albums: albums };
            dispatch({ type: GET_MUSIC_ALBUMS, payload: albumPayload });

        }

    } catch(e) {
        console.log(e);
    }

}