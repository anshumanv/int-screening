import React, { Component } from 'react';
import Quiz from '../components/Quiz'
import { connect } from 'react-redux';
import { fetchQuestions } from '../actions/questionActions'; 

class Interview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doamin: ''
        }
    };

    componentDidMount() {
        const domain = window.location.pathname.split('/')[2];
        this.setState({
            domain
        })
    }

    render() {
        return(
            <div>
                <Quiz />
                This is interview 
            </div>
        )
    }
}

export default Interview;