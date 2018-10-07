import React from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';

function Question(props) {

		var userId = firebase.auth().currentUser.uid;
	return firebase.database().ref.child('Questions').child('Web').child('1').once('value').then(function(snapshot) {
	  var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
	  console.log(username)
	});

  return (
    <h2 className="question">{props.content}</h2>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;