import { createSlice } from '@reduxjs/toolkit';

const songSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    setSongs: (state, action) => {
      return action.payload;
    },
    addSong: (state, action) => {
      state.push(action.payload);
    },
    deleteSong: (state, action) => {
      return state.filter(song => song.id !== action.payload);
    }
  }
});

export const { setSongs, addSong, deleteSong } = songSlice.actions;

export default songSlice.reducer;
