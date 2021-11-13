import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory, createBrowserHistory } from 'history';
import('./styles.css');

const mount = (el, { onSignin, onNavigate, defaultHistory, initalPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initalPath],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignin={onSignin} history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};
if (process.env.NODE_ENV == 'development') {
  const devRoot = document.querySelector('#_auth_local');
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}
export { mount };
