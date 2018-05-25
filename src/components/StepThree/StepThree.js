import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => (
    {reduxState}
);

class StepThree extends Component {

    handleCheckout = (event) => {
        let order = {
            customer: this.props.reduxState.customerReducer,
            pizza: this.props.reduxState.pizzaReducer,
            order_total: 30, // TODO: change this when order_total function exists
            type: "Pickup", // TODO: change this when type reducer exists
        };
        axios.post('/api/order', order)
            .then((response) => {
                console.log(response.status);
            }).catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h3>Step 3: Checkout</h3>
                {this.props.reduxState.customerReducer.name}
                {this.props.reduxState.customerReducer.street_address}
                {this.props.reduxState.customerReducer.city}
                {this.props.reduxState.customerReducer.zip}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.pizzaReducer.map((pizza) => (
                            <tr key={pizza._id}>
                                <td>{pizza.name}</td>
                                <td>{pizza.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={this.handleCheckout}>Checkout</button>
            </div>
        );
    }
}

// connect() allows us to dispatch actions
export default connect(mapReduxStateToProps)(StepThree);