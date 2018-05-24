import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);


class StepOne extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.getPizza();
    }

    getPizza(){
        axios.get('/api/pizza').then((response) => {
            const action = { type: 'PIZZA', payload: response.data};
            this.props.dispatch(action);
        }).catch((error) => {
            alert('Pizza is not in the oven');
        })
    }

    render() {
        return (
            <div>
                <h3> Step 1: Select your Pizza</h3>
                <ul className='container'>
                {this.props.reduxState.pizzaReducer.map(pizza => (
                    <li key={pizza._id}>{pizza.name}{pizza.description}{pizza.cost}</li>
                ))}
                </ul>

            </div>
        );
    }

}


// connect() allows us to dispatch actions
export default connect(mapReduxStateToProps)(StepOne);