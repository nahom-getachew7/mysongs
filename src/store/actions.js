// actions.js
import { setSongs, addSong, deleteSong } from './reducers';
import { fetchSongs, createSong as createSongAPI, deleteSong as deleteSongAPI } from '../api/api';

export const fetchSongsFromAPI = () => {
  return async dispatch => {
    try {
      const songs = await fetchSongs();
      dispatch(setSongs(songs));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewSong = newSong => {
  return async dispatch => {
    try {
      const createdSong = await createSongAPI(newSong);
      dispatch(addSong(createdSong));
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeSong = songId => {
  return async dispatch => {
    try {
      await deleteSongAPI(songId);
      dispatch(deleteSong(songId));
    } catch (error) {
      console.log(error);
    }
  };
};
