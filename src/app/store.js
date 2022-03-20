import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/search/searchSlice';
import itemReducer from '../features/item/itemSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    item: itemReducer,
  },
});
