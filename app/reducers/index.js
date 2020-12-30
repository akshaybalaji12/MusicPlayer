import { combineReducers } from 'redux';
import media from './media';
import playback from './playback';
import playlists from './playlists';

export default combineReducers({
    media,
    playback,
    playlists
});