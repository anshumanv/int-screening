import React, { Component } from 'react';
import Auth from '../components/authButton';
import { connect } from 'react-redux';
import Quiz from '../components/Quiz'

class Start extends Component {
    render() {
        const signedIn = this.props.signedIn;
        return(
            <div>
                {this.props.signedIn && <Auth />}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        signedIn: state.auth.signedIn
    };
};
  
const mapDisPatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Start);
