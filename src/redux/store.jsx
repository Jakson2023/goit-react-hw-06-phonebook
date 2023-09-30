import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
const rootReducer = (state = initialState, action) => {
  return state;
};

const initialState = {
  contacts: [],
  filter: '',
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
