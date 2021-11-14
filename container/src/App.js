import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Reachme from './components/ReachmeApp';
import { renderPlaceHolder } from './components/Loaders/PlaceHolderScreen';
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
        <Header
          onSignOut={() => setSignedIn(!isSignedIn)}
          isSignedIn={isSignedIn}
        />
        <Suspense fallback={<div>{renderPlaceHolder}</div>}>
          <Switch>
            <Route path="/auth">
              <AuthAppLazy onSignIn={() => setSignedIn(true)} />
            </Route>
            <Route path="/">
              <NewsBoxLazy isSignedIn={isSignedIn} />
            </Route>
          </Switch>
        </Suspense>
        <Reachme />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
