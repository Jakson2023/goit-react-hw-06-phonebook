import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
