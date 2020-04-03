import React, { Component } from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <User age="20">John</User>
                <User age="20">Jill</User>
                <User>Poirot</User>
                <User></User>
                <User>Below stupid</User>
            </div>
        )
    }
}

export default Users;