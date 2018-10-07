import React, { Component } from 'react';
import Quiz from '../components/Quiz'
import Questions from '../components/Question'

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
                <Questions/>
                This is interview {this.state.amount}
            </div>
        )
    }
}