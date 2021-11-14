import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles.css';

const mount = (el) => {
  ReactDOM.render(<App />, el);
};
if (process.env.NODE_ENV == 'development') {
  const devRoot = document.querySelector('#_reachme_local');
  if (devRoot) {
    mount(devRoot);
  }
}
export { mount };
