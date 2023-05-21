import React from 'react';

function SongItem({ song }) {
  return (
    <div>
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      <p>{song.genre}</p>
    </div>
  );
}

export default SongItem;
