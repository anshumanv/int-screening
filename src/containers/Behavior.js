import React, { Component } from 'react';
import * as firebase from 'firebase'
import { Input } from 'antd';
import { Button} from 'antd';

const { TextArea } = Input;

export default class Behavior extends Component {
    state = {
        questions: [],
        qIndex: 0,
    }

    componentDidMount() {
        let questions = [];
		firebase.database().ref('BAQ').on('value', snap => {
            const qobj = snap.val()
            console.log(qobj)
			for(let question in qobj) {
				questions.push(qobj[question])
            }
            this.setState({
                questions
            })
        })
    }

    handleSubmit = () => {
        const {qIndex, questions} = this.state
        if(qIndex === questions.length -1){
            return window.location.pathname = '/';
        }
        const response = document.querySelector('.ant-input');
        response.value = '';
        let newIndex = this.state.qIndex + 1
        this.setState({
            qIndex: newIndex
        })
    }

    render() {
        const { questions, qIndex } = this.state
        return(
            <div className="behavior-root">
                {!!questions.length ?
                    <div>
                    <div style={{display: 'flex', justifyContent: 'center', fontSize: '3em'}}>{questions[qIndex]}</div>
                    <TextArea placeholder="Please enter your response" autosize />
                    <Button onClick={this.handleSubmit} style={{marginTop: '20px'}} type="primary" block>Submit</Button>
                    </div>
                : <Button shape="circle" loading />
                }
            </div>
        )
    }
}
