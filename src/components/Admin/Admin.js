import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import OrderTable from '../OrderTable/OrderTable';

class Admin extends Component {

    render() {
        return (
            <div>
                <h3>Admin</h3> 
                <OrderTable /> 
            </div>
        );
    }
}

// connect() allows us to dispatch actions
export default connect()(Admin);