import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import { signedIn } from '../actions/authActions';

class Auth extends React.Component {
  handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    let self = this;
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        const user = result.user;
        self.props.signedIn(user);
      })
      .catch(function(error) {
        throw Error(error);
      });
  };

  render() {
    return (
      <button onClick={this.handleSignIn}>
        Sign In
      </button>
    );
  }
}

Auth.propTypes = {
  signedIn: PropTypes.func,
};

const mapStateToProps = state => {
  return {};
};

const mapDisPatchToProps = dispatch => {
  return {
    signedIn: user => {
      return dispatch(signedIn(user));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps,
)(Auth);