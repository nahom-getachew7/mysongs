// songSaga.js
import { put, takeEvery } from 'redux-saga/effects';
import { setSongs, addSong, deleteSong } from '../store/reducers';
import { fetchSongs, createSong, deleteSong as deleteSongAPI } from '../api/api';

function* fetchSongsSaga() {
  try {
    const songs = yield fetchSongs();
    yield put(setSongs(songs));
  } catch (error) {
    console.log(error);
  }
}

function* createSongSaga(action) {
  try {
    const createdSong = yield createSong(action.payload);
    yield put(addSong(createdSong));
  } catch (error) {
    console.log(error);
  }
}

function* deleteSongSaga(action) {
  try {
    yield deleteSongAPI(action.payload);
    yield put(deleteSong(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* watchFetchSongs() {
  yield takeEvery('songs/fetchSongs', fetchSongsSaga);
}

export function* watchCreateSong() {
  yield takeEvery('songs/createSong', createSongSaga);
}

export function* watchDeleteSong() {
  yield takeEvery('songs/deleteSong', deleteSongSaga);
}
