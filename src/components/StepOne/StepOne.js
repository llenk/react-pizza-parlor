import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);


class StepOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3> Step 1: Select your Pizza</h3>
                {this.props.reduxState.pizzaReducer.map(pizza => (
                    <li key={pizza._id}>{pizza.name}{pizza.description}{pizza.cost}</li>
                ))}
                {JSON.stringify(this.props)}
            </div>
        );
    }
}


// connect() allows us to dispatch actions
export default connect()(StepOne);