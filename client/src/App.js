import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// css
import './css/normalize.css';
import './css/custom.css';
import './css/webflow.css';

import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
