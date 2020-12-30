import { GET_MUSIC_ALBUMS } from '../constants/action-types';

const INITIAL_STATE = { mediaLoaded: false, albums: [] };

export default function(state = INITIAL_STATE, action) {

    switch(action.type) {

        case GET_MUSIC_ALBUMS:
            return { mediaLoaded: true, ...action.payload };

        default:
            return state;

    }

}