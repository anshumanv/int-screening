import React, { Component } from 'react'

export default class QuestionNavigator extends Component {
  render() {
    const {qIndex, questions} = this.props;
    return (
      <div className="right-nav">
        <div class="question-count">
          <div className="right-nav-header">Questions</div>
          <div>{qIndex+1} / {questions.length}</div>
        </div>
      </div>
    )
  }
}
