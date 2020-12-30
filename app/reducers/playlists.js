import { ADD_TO_FAVORITES } from '../constants/action-types';
import { ADD_TO_PLAYLIST } from '../constants/action-types';
import { CREATE_PLAYLIST } from '../constants/action-types';
import { RENAME_PLAYLIST } from '../constants/action-types';
import { DELETE_PLAYLIST } from '../constants/action-types';

const INITIAL_STATE = { favorites: [] };

export default function (state = INITIAL_STATE, action) {

    switch(action.type) {

        case ADD_TO_FAVORITES:
            let favorites = { ...state.favorites };
            favorites.push(action.payload);
            return { ...favorites };

        case CREATE_PLAYLIST:
            return { ...state, [action.payload]: [] };

        case ADD_TO_PLAYLIST:
            let { title, currenTrack } = actoin.payload;
            let playlists = { ...state };
            playlists[title].push(currenTrack);
            return { ...playlists };

        default:
            return state;

    }

}