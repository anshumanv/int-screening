import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import NotFound from './containers/NotFound'
import Admin from './containers/Admin'
import Interview from './containers/Interview'
import Start from './containers/Start'
import { config } from './config'
import { getStore, getState } from './store/store';

firebase.initializeApp(config);

const store = getStore();

export default class App extends Component {
    componentDidMount() {

    }
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                        return <Start />;
                        }}
                    />
                    <Route exact path="/interview/:interviewID" component={Interview}/>
                    <Route exact path="/admin" component={Admin} />
                    <Route exact path="*" component={NotFound } />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}