import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NewsBox from './components/NewsBox';
import Header from './components/Header';
import AuthApp from './components/AuthApp';

import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/auth" component={AuthApp} />
          <Route path="/" component={NewsBox} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
