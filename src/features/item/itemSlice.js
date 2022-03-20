import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./itemAPI";

const initialState = {
  list: []
}

export const selectItems = (state) => state.item.list;

export const fetchItemsAsyncThunk = createAsyncThunk('item/fetchItems', fetchItems)

export const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsAsyncThunk.fulfilled, (state, action) => {
        state.list = action.payload;
      })
  }
})

export default itemSlice.reducer;
