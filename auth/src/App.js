import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/auth/signin" component={SignIn} />
        <Route path="/auth/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
