import React, { Component } from 'react';

export default class Interview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 10
        }
    };
    print = () => {
        console.log('asdasd')
    };
    render() {
        return(
            <div onClick={this.print}>This is interview {this.state.amount}</div>
        )
    }
}