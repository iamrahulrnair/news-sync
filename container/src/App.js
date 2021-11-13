import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
// import NewsBox from './components/NewsBox';
// import AuthApp from './components/AuthApp';

const NewsBoxLazy = lazy(() => import('./components/NewsBox'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

import './styles.css';

function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <div>
        <Header onSignOut={() => setSignedIn(false)} isSignedIn={isSignedIn} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth">
              <AuthAppLazy onSignIn={() => setSignedIn(true)} />
            </Route>
            <Route path="/">
              <NewsBoxLazy onSignIn={() => setSignedIn(true)} />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
export default App;
