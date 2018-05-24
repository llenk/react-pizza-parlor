import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => (
    {reduxState}
);

class StepThree extends Component {

    render() {
        return (
            <div>
                <h3>Step 3: Checkout</h3>
                <p>{this.props.reduxState.customerReducer}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.pizzaReducer.map(pizza =>
                            <tr key={pizza._id}>
                                <td>{pizza.name}</td>
                                <td>{pizza.cost}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

// connect() allows us to dispatch actions
export default connect(mapReduxStateToProps)(StepThree);