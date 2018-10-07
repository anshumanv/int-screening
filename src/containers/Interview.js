import React, { Component } from 'react';
import Quiz from '../components/Quiz'

export default class Interview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            amount: 10
        }
    };
    render() {
        return(
            <div>
                <Quiz/>
                This is interview {this.state.amount}
            </div>
        )
    }
}