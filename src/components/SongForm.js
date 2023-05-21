import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSong } from '../store/actions';

function SongForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newSong = { title, artist, genre };
    dispatch(createSong(newSong));
    setTitle('');
    setArtist('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={e => setArtist(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={e => setGenre(e.target.value)}
      />
      <button type="submit">Create Song</button>
    </form>
  );
}

export default SongForm;
