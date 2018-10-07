import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import { signedIn, signedOut } from './actions/authActions';
import { connect } from 'react-redux';
import NotFound from './containers/NotFound'
import Admin from './containers/Admin'
import Interview from './containers/Interview'
import Start from './containers/Start'
import { config } from './config'
import { getStore, getState } from './store/store';

// firebase.initializeApp(config);

class App extends Component {
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
            <Start />
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
    )(App);

