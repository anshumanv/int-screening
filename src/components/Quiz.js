import React, { Component } from 'react';
import {Radio, Button} from 'antd';
import * as firebase from 'firebase';
import QuestionNavigator from './QuestionNavigator';  
import Question from './Question';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      qIndex: 0,
      questionText: '',
      questionAns: '',
      totalWeight: 0,
      selectedOption: ''
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
    const {questions, qIndex, selectedOption, totalWeight} = this.state;
    if(selectedOption === questions[qIndex]['correct']) {
      console.log(questions[qIndex]['weight']);
      let newWeight = totalWeight + parseInt(questions[qIndex]['weight'])
      this.setState({
        totalWeight: newWeight
      })
    }
    if(qIndex === questions.length -1){
      return window.location.pathname = '/behavior';
    }
    this.setState({
      qIndex: qIndex + 1,
      selectedOption: ''
    })
  }

  updateOption = (e) => {
    this.setState({
      selectedOption: e.target.value
    })
  }

  render() {
    const {questions, qIndex} = this.state;
    const curQ = questions[qIndex]
    return (
        <div className="quiz">
          {!!questions.length ?
          <div className="questions">
            <div className="question-section">
            <Question content={questions[qIndex]['question']} />
            <div className="options">
              <Radio.Group value={this.state.selectedOption} buttonStyle="solid" onChange={this.updateOption}>
                <Radio.Button value="a">{questions[qIndex]['optionA']}</Radio.Button>
                <Radio.Button value="b">{questions[qIndex]['optionB']}</Radio.Button>
                <Radio.Button value="c">{questions[qIndex]['optionC']}</Radio.Button>
                <Radio.Button value="d">{questions[qIndex]['optionD']}</Radio.Button>
              </Radio.Group>
            </div>
            <Button onClick={this.handleSubmit} style={{marginTop: '20px', maxWidth: '200px'}} type="primary" block>Submit</Button>
        </div>
        <QuestionNavigator questions={questions} qIndex={qIndex} />
          </div>
            :  <Button shape="circle" loading />}
          
        </div>
          
          
    );
  }
}

export default Quiz;
