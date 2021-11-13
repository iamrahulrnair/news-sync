import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Landing from './components/Landing';
import Setting from './components/Settings';
import NotFound from './components/NotFound/NotFound';

function App({ history }) {
  return (
    <div className="container">
      <Router history={history}>
        <Switch>
          <Route exact path="/settings" component={Setting} />
          <Route exact path="/" component={Landing} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
