import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SongItem from './SongItem';
import { fetchSongsFromAPI } from '../store/actions';

function SongList() {
  const dispatch = useDispatch();
  const songs = useSelector(state => state.songs);

  useEffect(() => {
    dispatch(fetchSongsFromAPI());
  }, [dispatch]);

  return (
    <div>
      {songs.map(song => (
        <SongItem key={song.id} song={song} />
      ))}
    </div>
  );
}

export default SongList;
