import React, { Component } from 'react';
import * as firebase from 'firebase';
import { signedIn, signedOut } from '../actions/authActions';
import { connect } from 'react-redux';


// firebase.initializeApp(config);

class head extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
              firebase.database().ref('/users/').on('value', snapshot => {
                if (!snapshot.hasChild(user.uid)) {
                  firebase.database().ref('/users/' + user.uid).set({
                    email: user.email,
                    name: user.displayName,
                    uid: user.uid
                  })
                }
              });
              this.props.signedIn(user);
            } else {
              this.props.signedOut();
            }
      });
    }
    render() {
        return(
            <div></div>
        )
    }
}

const mapStateToProps = state => {
    return {
      signedIN: state.auth.signedIn,
    };
};


export default
    connect(
      mapStateToProps,
      {
        signedIn,
        signedOut,
      },
    )(head);

