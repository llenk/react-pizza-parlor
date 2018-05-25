import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
          </header>
          <br />
          <Route exact path='/' component={StepOne} />
          <Route exact path='/two' component={StepTwo} />
          <Route exact path='/three' component={StepThree} />
          <Route exact path='/admin' component={Admin} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
