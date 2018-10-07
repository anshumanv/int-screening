import React from 'react';
import NewForm from '../components/NewForm';
import * as firebase from 'firebase';
import { List } from 'antd';

class Dummy extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			BAQ: {},
			questions: [],
		}
	}
	componentDidMount() {
		let questions = [];
		firebase.database().ref('BAQ').on('value', snap => {
			
			const qobj = snap.val()
			for(let question in qobj) {
				questions.push(qobj[question])
			}
		})
		this.setState({
			questions
		})
	}

	render() {
		if(this.props.currentMenu==="1")
			return <NewForm/>;
		else
			return  <List
			header={<b>Behavioral Questions</b>}
			bordered
			dataSource={this.state.questions}
			renderItem={item => (<List.Item>{item}</List.Item>)}
		  />;
	}
}

Dummy.defaultProps = {
	currentMenu: "1"
}

export default Dummy;