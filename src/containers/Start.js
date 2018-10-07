import React, { Component } from 'react';
import Auth from '../components/authButton';
import { connect } from 'react-redux';
import Quiz from '../components/Quiz'
import { Button } from 'antd';
import {Link} from 'react-router-dom'

class Start extends Component {
    
    render() {
        const signedIn = this.props.signedIn;
        return(
            <div>
                {!this.props.signedIn ? <Auth />: 
                    <Link to={'/interview/Web'}><Button>
                    Take Test</Button>
                    </Link>
                    }
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
