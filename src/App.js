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
import './App.css'

// firebase.initializeApp(config);

class App extends Component {
    render() {
        return(
            <Start />
        )
    }
}

export default App;

