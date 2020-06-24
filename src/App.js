import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from "./screens/Login"
import './App.css';

function App() {
  return (
        <Router>
          <Switch>
            <Route path='/' exact component={Login}/>
          </Switch>
        </Router>
  );
}

export default App;
