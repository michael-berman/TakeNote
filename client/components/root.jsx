import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
// TODO: add store into root
const Root = ({ store }) => {
  return (
    <Provider>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};

export default Root;
