import React, { Component } from 'react';
import {Radio} from 'antd';
import Question from './Question';
import * as firebase from 'firebase';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      qIndex: 0,
      questionText: '',
      questionAns: '',
      totalWeight: 0,
      curQuestion: {},
    }
  }

  componentDidMount() {
    const domain = window.location.pathname.split('/')[2];
    
    firebase.database().ref(`/TAQ/${domain}/`).on('value', snap => {
      const questions = snap.val();
      this.setState({
        questions,
      })
    })
    
  }
  // Todo
  handleSubmit = (e) => {
    if(e.target.value === this.state.curQuestion['Answer']) {
      this.setState({
        qIndex: this.state.qIndex++,
        questionText: this.state.questions[this.state.qIndex+1]
      })
    }
  }

  render() {
    const {questions, qIndex} = this.state;
    const curQ = questions[qIndex]
    return (
        <div className="quiz">
          <div>Select the appropriate option</div>
          <Question content={this.state.questionText} />
          <Radio.Group onChange={this.handleSubmit} buttonStyle="solid">
            <Radio.Button value="a">curQ['a']</Radio.Button>
            <Radio.Button value="b">curQ['b']</Radio.Button>
            <Radio.Button value="c">curQ['c']</Radio.Button>
            <Radio.Button value="d">curQ['d']</Radio.Button>
          </Radio.Group>
        </div>
    );
  }
}

export default Quiz;
