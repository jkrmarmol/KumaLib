import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    searchBook: (state, action) => {
      return state = action.payload;
    }
  }
})

export const { searchBook } = searchSlice.actions;
export default searchSlice.reducer;