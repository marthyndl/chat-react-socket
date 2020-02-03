import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Rob from './components/rob';
import Laura from './components/laura';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/laura" component={Laura} />
            <Route exact path="/rob" component={Rob} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
