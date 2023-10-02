import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  contacts: [],
  filter: '',
};

export const getLocalStorage = data => {
  return {
    type: 'app/getLocalStorage',
    payload: data,
  };
};

export const addContact = input => {
  return {
    type: 'app/addContact',
    payload: input,
  };
};

export const deleteContact = contact => {
  return {
    type: 'app/deleteContact',
    payload: contact,
  };
};

export const inputFilteredContacts = input => {
  return {
    type: 'app/filteredContacts',
    payload: input,
  };
};

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

    case 'app/filteredContacts':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
