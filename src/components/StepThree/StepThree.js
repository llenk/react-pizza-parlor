import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => (
    {reduxState}
);

class StepThree extends Component {




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
                <h3>Step 3: Checkout</h3>
                <p>{this.props.reduxState.customerReducer.map((customer, i) => <li key={i}>{customer}</li>)}</p>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.props.reduxState.pizzaReducer.map(pizza => <td key={pizza._id}>{pizza.name}</td>)}
                            {this.props.reduxState.pizzaReducer.map(pizza => <td key={pizza._id}>{pizza.cost}</td>)}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

// connect() allows us to dispatch actions
export default connect(mapReduxStateToProps)(StepThree);