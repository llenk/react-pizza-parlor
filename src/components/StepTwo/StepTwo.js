import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class StepThree extends Component {

    render() {
        return (
            <div>
                <h3>Step Three</h3>  
            </div>
        );
    }
}

// connect() allows us to dispatch actions
export default connect()(StepThree);