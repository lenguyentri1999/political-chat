import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { InitialForm } from './initial-form/initial-form';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/signUp/">Sign Up</Link>
              </li>
            </ul>
          </nav>

          <Route path="/signUp" exact component={InitialForm} />
        </div>
      </Router>
     
    );
  }
}

export default App;
