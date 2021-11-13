import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound/NotFound';

function App({ history, onSignin }) {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/auth/signin">
            <SignIn onSignin={onSignin} />
          </Route>
          <Route exact path="/auth/signup">
            <SignUp onSignin={onSignin} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
