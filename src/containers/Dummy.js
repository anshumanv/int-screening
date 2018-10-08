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
			users:[],
		}
	}
	componentDidMount() {
		let questions = [];
		let users = [];
		firebase.database().ref('BAQ').on('value', snap => {
			
			const qobj = snap.val()
			for(let question in qobj) {
				questions.push(qobj[question])
			}
		})
		this.setState({ questions })
		firebase.database().ref('users').on('value', snap => {
			const users_obj = snap.val()
			for(let user in users_obj)
				{
					users.push(users_obj[user].name)
				}
		})
		this.setState({
			users
		})
	}

	render() {		
		if(this.props.currentMenu==="1")
			return <NewForm/>;

		if(this.props.currentMenu==="4")
			return <List
			header={<b>Users responses</b>}
			bordered
			dataSource={this.state.users}
			renderItem={item => (<List.Item>{item}</List.Item>)}
		  />;

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