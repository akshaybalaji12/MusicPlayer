import { ADD_TO_FAVORITES } from '../constants/action-types';
import { ADD_TO_PLAYLIST } from '../constants/action-types';
import { CREATE_PLAYLIST } from '../constants/action-types';
import { RENAME_PLAYLIST } from '../constants/action-types';
import { DELETE_PLAYLIST } from '../constants/action-types';

export const addToFavorites = (currentTrack) => {

    return { type: ADD_TO_FAVORITES, payload: currentTrack };

}

export const createPlaylist = (playlistTitle) => {

    return { type: CREATE_PLAYLIST, payload: playlistTitle };

}

export const addToPlaylist = (title, currentTrack) => {

    return { type: ADD_TO_PLAYLIST, payload: { title, currentTrack } };

}