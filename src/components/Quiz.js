import React, { Component } from 'react';
import {Radio, Button} from 'antd';
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
      let qar = []
      for(let question in questions) {
        qar.push(questions[question])
      }
      this.setState({
        questions: qar
      })
    })
    
  }
  // Todo
  handleSubmit = (e) => {
    console.log('asda')
    const newIndex = this.state.qIndex + 1;
    if(e.target.value === this.state.curQuestion['Answer']) {
      let newWeight = this.state.totalWeight + this.state.questions[this.state.qIndex]['weight']
      this.setState({
        totalWeight: newWeight
      })
    }
    if(this.state.qIndex == this.state.questions.length -1){
      return window.location.pathname = '/';
    }
    this.setState({
      qIndex: newIndex
    })
  }

  render() {
    const {questions, qIndex} = this.state;
    const curQ = questions[qIndex]
    return (
        <div className="quiz">
          {!!questions.length ?
          <div>
          <Question content={questions[qIndex]['question']} />
          <Radio.Group onChange={this.handleSubmit} className="radio-group" buttonStyle="solid">
            <Radio.Button value="a">{questions[qIndex]['optionA']}</Radio.Button>
            <Radio.Button value="b">{questions[qIndex]['optionB']}</Radio.Button>
            <Radio.Button value="c">{questions[qIndex]['optionC']}</Radio.Button>
            <Radio.Button value="d">{questions[qIndex]['optionD']}</Radio.Button>
          </Radio.Group>
        </div>:  <Button shape="circle" loading />}
        </div>
          
          
    );
  }
}

export default Quiz;
