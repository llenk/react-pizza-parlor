import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import CustomerForm from '../CustomerForm/CustomerForm';

class StepThree extends Component {

    render() {
        return (
            <div>
                <h3>Step Two: Customer Information</h3>  
                <CustomerForm />
                <Link to="/three">Next</Link>
            </div>
        );
    }
}

// connect() allows us to dispatch actions
export default connect()(StepThree);