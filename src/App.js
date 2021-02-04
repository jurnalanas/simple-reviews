import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/reviews/:reviewId" exact>
          <Reviews/>
        </Route>
        <Redirect to ="/" />
      </Switch>
    </Router>
  );
}

export default App;
