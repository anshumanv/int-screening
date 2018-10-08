import React from 'react';
import NewForm from '../components/NewForm';
import * as firebase from 'firebase';
import { List } from 'antd';

class Dummy extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			BAQ: [],
			TAQ: [],
			users:[],
		}
	}
	componentDidMount() {
		let BAQ = [];
		let TAQ = [];
		let users = [];
		firebase.database().ref('BAQ').on('value', snap => {
			
			let qobj = snap.val()
			for(let question in qobj) {
				BAQ.push(qobj[question])
			}
		})
		this.setState({BAQ});
		firebase.database().ref('users').on('value', snap => {
			const users_obj = snap.val()
			for(let user in users_obj)
				{
					users.push(users_obj[user].name)
				}
		})
		this.setState({users});
		firebase.database().ref('TAQ').child('Web').on('value', snap => {
			let qobj = snap.val()
			for(let question in qobj){
				TAQ.push(qobj[question].question)
			}
		})
		this.setState({TAQ});
	}

	render() {		
		console.log(this.state.TAQ)
		if(this.props.currentMenu==="1")
			return <NewForm/>;

		if(this.props.currentMenu==="4")
			return <List
			header={<b>Users responses</b>}
			bordered
			dataSource={this.state.users}
			renderItem={item => (<List.Item>{item}</List.Item>)}
		  />;
		
		  if(this.props.currentMenu==="2")
			return  <List
			header={<b>Behavioral Questions</b>}
			bordered
			dataSource={this.state.BAQ}
			renderItem={item => (<List.Item>{item}</List.Item>)}
		  />;

		  else
		  	return <List
		  	header={<b>Technical Questions</b>}
		  	bordered
		  	dataSource={this.state.TAQ}
		  	renderItem={item => (<List.Item>{item}</List.Item>)}
		  />;
	}
}

Dummy.defaultProps = {
	currentMenu: "1"
}

export default Dummy;