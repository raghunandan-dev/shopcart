import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import { HomePage } from './components/HomePage/HomePage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { NoMatch } from './components/util/NoMatch';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Router>
            <div>
            <Switch> 
              <PrivateRoute exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route component={NoMatch}/>
            </Switch> 
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
