import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class StepThree extends Component {



    import React, { Component } from 'react';
    import axios from 'axios';
    import './App.css';
    import { connect } from 'react-redux';
    import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
    
    import StepOne from '../StepOne/StepOne';
    import StepTwo from '../StepTwo/StepTwo';
    import StepThree from '../StepThree/StepThree';
    import Admin from '../Admin/Admin';
    
    class App extends Component {
    
    
    
      addOrderPost = (newOrder) => {
        axios.post('/api/order', this.props.reduxState)
          .then((response) => {
            console.log('api/order post: successful', response);
            // refresh data from server
          })
          .catch((error) => {
            console.log('post/add gallery item error', error);
          });
      }

    

    render() {
        return (
            <div>
                <h3>Step Three</h3>  
                <div className='delete-button' onClick={() => { if (window.confirm('Are you sure you wish to delete this order')) this.onCancel(item) } } />
            </div>
        );
    }
}

// connect() allows us to dispatch actions
export default connect()(StepThree);