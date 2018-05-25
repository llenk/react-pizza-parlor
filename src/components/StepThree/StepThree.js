import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class StepThree extends Component {

    orderTotal = (pizzaArray) => {
        let tot = 0;
        for (let i=0; i<pizzaArray.length; i++) {
            tot += parseInt(pizzaArray[i].cost);
        }
        return tot;
    }

    handleCheckout = (event) => {
        let order = {
            customer: this.props.reduxState.customerReducer,
            pizza: this.props.reduxState.pizzaReducer,
            order_total: this.orderTotal(this.props.reduxState.pizzaReducer),
            type: "Pickup", // TODO: change this when type reducer exists
        };
        console.log(order);
        axios({
            method: 'POST',
            url: '/api/order',
            data: order
        }).then((response) => {
            console.log(response.status);
        }).catch((error) => {
            console.log(error);
        });
        this.props.history.push('/');
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