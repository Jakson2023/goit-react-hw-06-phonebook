import { configureStore } from '@reduxjs/toolkit';

import { createAction, createReducer } from '@reduxjs/toolkit';


const initialState = {
  contacts: [],
  filter: '',
};





export const getLocalStorage =createAction('app/getLocalStorage');

export const addContact = createAction ('app/addContact');

export const deleteContact = createAction('app/deleteContact');

export const inputFilteredContacts = createAction('app/inputFilteredContacts')



export const rootReducer1 = createReducer(initialState, builder => builder
  .addCase(getLocalStorage, (state, action)=>{})
  .addCase (addContact, (state, action)=>{})
  .addCase(deleteContact, (state, action)=>{})
  .addCase (inputFilteredContacts,(state, action)=>{})
)
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'app/getLocalStorage':
      return {
        ...state,
        contacts: action.payload,
      };

    case 'app/addContact':
      const newContact = action.payload;
      const updContacts = [...state.contacts, newContact];
      return {
        ...state,
        contacts: updContacts,
      };

    case 'app/deleteContact':
      return {
        ...state,
        contacts: action.payload,
      };

    case 'app/inputFilteredContacts':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};


export const store = configureStore ({
  reducer: rootReducer
})



