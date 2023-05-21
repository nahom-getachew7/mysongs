// rootSaga.js
import { all } from 'redux-saga/effects';
import { watchFetchSongs, watchCreateSong, watchDeleteSong } from './sagas/songSaga';

export default function* rootSaga() {
  yield all([
    watchFetchSongs(),
    watchCreateSong(),
    watchDeleteSong()
  ]);
}
