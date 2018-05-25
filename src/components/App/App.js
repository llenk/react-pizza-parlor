import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Router>
        <div>
        <Route exact path='/' component={StepOne} />
        <Route exact path='/two' component={StepTwo} />
        <Route exact path='/three' component={StepThree} />
        <Route exact path='/admin' component={Admin} />
        </div>
      </Router>
      </div>
    )
  };
}

export default connect()(App);
