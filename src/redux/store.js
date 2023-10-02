import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';


const initialState = {
  contacts: [],
  filter: '',
};


export const addContact = input => {
  return {
    type: 'app/addContact',
    payload: input,
  };
};


const rootReducer = (state = initialState, action) => {
  console.log(action);
  return state;
};



const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
