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
        this.state = {
            pizzaChoices: [],
            };
    }

    componentDidMount(){
        this.getPizza();
    }

    getPizza(){
        axios.get('/api/pizza').then((response) => {
            this.setState ({
                pizzaChoices: response.data
            })
        }).catch((error) => {
            alert('Pizza is not in the oven');
        })
    }

    addPizza = (pizza) => (event) => {
        const action = { type: 'PIZZA', payload: pizza};
        this.props.dispatch(action);
    }

    render() {
        return (
            <span>
                <h1> Step 1: Select your Pizza</h1>
                {this.state.pizzaChoices.map(pizza => (
                    <div key={pizza._id} className='container'>
                        <h3>{pizza.name}</h3>
                        <h5>{pizza.description}</h5>
                        <h4>{pizza.cost}</h4>
                        <button onClick={this.addPizza(pizza)}>Add</button>
                        <button>Delete</button></div>
                ))}
                <Link to="/two">Next</Link>
            </span>
        );
    }

}


// connect() allows us to dispatch actions
export default connect(mapReduxStateToProps)(StepOne);