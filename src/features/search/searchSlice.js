import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

export const selectSearchName = (state) => state.search.name;

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchInputChanged(state, action) {
      state.name = action.payload;
    },
  }
});

export const { searchInputChanged } = searchSlice.actions;

export default searchSlice.reducer;
