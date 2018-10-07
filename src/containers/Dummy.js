import React from 'react';
import NewForm from '../components/NewForm';

class Dummy extends React.Component {
	render() {
		if(this.props.currentMenu==="1")
			return <NewForm/>;
		else
			return <div>Question3</div>;
	}
}

Dummy.defaultProps = {
	currentMenu: "1"
}

export default Dummy;