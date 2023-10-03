import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    inputFilteredContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { inputFilteredContacts } = slice.actions;
export const filterReducer = slice.reducer;
