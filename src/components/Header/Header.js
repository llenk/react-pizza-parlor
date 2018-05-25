import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
    render() {
      return (
       <div className='header'>
       <img src="images/prime_pizza.png" class="logo" />
       </div>
      )
    };
  }
  
  export default connect()(Header);
  
