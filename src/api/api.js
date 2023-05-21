// api.js
export const fetchSongs = async () => {
    try {
      const response = await fetch('/api/songs.json');
      const songs = await response.json();
      return songs;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  
  export const createSong = async newSong => {
    try {
      // Read the existing songs from the local JSON file
      const response = await fetch('/api/songs.json');
      const songs = await response.json();
  
      // Generate a new unique ID for the song
      const newId = songs.length > 0 ? songs[songs.length - 1].id + 1 : 1;
  
      // Add the new song to the existing songs
      const updatedSongs = [...songs, { ...newSong, id: newId }];
  
      // Write the updated songs to the local JSON file
      await fetch('/api/songs.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedSongs)
      });
  
      return { ...newSong, id: newId };
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  
  export const deleteSong = async songId => {
    try {
      // Read the existing songs from the local JSON file
      const response = await fetch('/api/songs.json');
      const songs = await response.json();
  
      // Filter out the song with the specified ID
      const updatedSongs = songs.filter(song => song.id !== songId);
  
      // Write the updated songs to the local JSON file
      await fetch('/api/songs.json', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedSongs)
      });
    } catch (error) {
      console.log(error);
    }
  };
  