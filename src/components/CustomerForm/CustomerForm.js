import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CustomerForm extends Component {
    constructor() {
        super();
        this.state = {
            customer: {
                name: '',
                street_address: '',
                city: '',
                zip: '',
            },
            type: '',
        }
    }

    handleCustomerChange = (event) => {
        this.setState({
            customer: {
                ...this.state.customer,
                [event.target.name]: event.target.value,
            }
        });
    }

    handleTypeClick = (event) => {
        this.setState({
            type: event.target.value,
        });
    }

    render() {
        return (
            <div>
            <form>
                <input onChange={this.handleCustomerChange} placeholder="Name" name="name" />
                <input onChange={this.handleCustomerChange} placeholder="Street Address" name="street_address" />
                <input onChange={this.handleCustomerChange} placeholder="City" name="city" />
                <input onChange={this.handleCustomerChange} placeholder="Zip Code" name="zip" />
            </form>
            <form>
                <input type="radio" name="type" value="Pickup" onClick={this.handleTypeClick}/>
                <label>Pickup</label>
                <input type="radio" name="type" value="Delivery"/>
                <label>Delivery</label>

            </form>
            </div>
        );
    }
}

// connect() allows us to dispatch actions
export default connect()(CustomerForm);