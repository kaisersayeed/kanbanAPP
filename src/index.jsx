import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import localforage from 'localforage';
import configStore from './store';
import App from './containers/App'

const localStore = localforage.createInstance({
  name: 'kanban',
});

localStore
.getItem('state')
.then(stateValue => (stateValue = stateValue || undefined))
.then(
    stateValue => configStore(stateValue),
    err => {
      console.error(err);
      return configStore(null);
    }
)
.then(store => {
  ReactDOM.render(
      <div>
        <Provider store={store}>
          <App />
        </Provider>
      </div>,
      document.querySelector('.container')
  );
  store.subscribe(() => localStore.setItem('state', store.getState()));
});
