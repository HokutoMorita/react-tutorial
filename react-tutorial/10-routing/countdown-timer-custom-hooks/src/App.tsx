import { VFC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from './components/pages/Home';
import User from './components/pages/User';
import NotFound from './components/pages/NotFound';

const App: VFC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Redirect from="/user/profile/:userId" to="/user/:userId" />
    <Route path="/user/:userId">
      <User />
    </Route>
    <Redirect push to="/" />
  </Switch>
);

export default App;
