import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style/index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './reduxStore/store.jsx';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate Loading={'loading'} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
