import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// css
import './css/normalize.css';
import './css/custom.css';
import './css/webflow.css';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>


    </div>
  );
}

export default App;
