import { createStore, compose } from 'redux';
import rootReducer from './reducers/';

const configStore = (initialState = {})=> {
  return createStore(
    rootReducer,
    initialState,
    compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
  );
};

export default configStore;
