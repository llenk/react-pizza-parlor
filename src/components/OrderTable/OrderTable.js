import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class OrderTable extends Component {

    constructor() {
        super();
        this.state = {
            orders: [],
        };
    }

    componentDidMount = () => {
        axios.get('/api/order')
            .then((response) => {
                this.setState({
                    orders: response.data,
                });
                console.log(this.state.orders);
            }).catch((error) => {
                console.log('whoops');
            });
    }

    formatDate = (date) => {
        let hour = {};
        if (date.slice(11, 13) == 0) {
            hour = {number: 12, m: 'am'};
        }
        else if (date.slice(11, 13) < 12) {
            hour = {number: date.slice(11, 13), m: 'am'};
        }
        else if (date.slice(11, 13) == 12) {
            hour = {number: 12, m: 'pm'};
        }
        else if (date.slice(11, 13) < 24) {
            hour = {number: date.slice(11, 13)-12, m: 'pm'};
        }
        let returnString = '';
        returnString += date.slice(5, 7) + '/' + date.slice(8, 10) + '/' + date.slice(0,4)
            + ' at '
            + hour.number + ':' + date.slice(14, 16) + ' ' + hour.m;
        return returnString;
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Time Order Placed
                            </th>
                            <th>
                                Type
                            </th>
                            <th>
                                Cost
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map(order => (
                            <tr key={order._id}>
                                <td>
                                    {order.customer.name}
                                </td>
                                <td>
                                    {this.formatDate(order.time)}
                                </td>
                                <td>
                                    {order.type}
                                </td>
                                <td>
                                    {order.order_total}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
            </div>
        );
    }
}

// connect() allows us to dispatch actions
export default connect()(OrderTable);