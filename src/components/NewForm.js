import React from 'react';
import { Tabs } from 'antd';
import BAForm from './BAForm'

const TabPane = Tabs.TabPane;

export default class NewForm extends React.Component {

	callback(key) {
	  console.log(key);
	}

	render() {
		return(
				<Tabs defaultActiveKey="1" onChange={this.callback()}>
				    <TabPane tab="Form 1" key="1"><BAForm/></TabPane>
				    <TabPane tab="Form 2" key="2">Technical Aspect Form</TabPane>
				</Tabs>
			)
	}
}