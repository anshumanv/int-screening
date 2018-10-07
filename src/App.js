import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NotFound from './containers/NotFound'
import Admin from './containers/Admin'
import Interview from './containers/Interview'
import Start from './containers/Start'

export default class App extends Component {
    render() {
        return(
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
        )
    }
}