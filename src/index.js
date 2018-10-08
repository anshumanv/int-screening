import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import NotFound from './containers/NotFound'
import Admin from './containers/Admin'
import Interview from './containers/Interview'
import Behavior from './containers/Behavior'
import { config } from './config'
import { getStore, getState } from './store/store';
import Head from './components/Head';


// saikou
firebase.initializeApp(config);

const store = getStore();

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <div>
            <Head />
            <Switch>
            <Route
                exact
                path="/"
                render={() => {
                return <App />;
                }}
            />
            <Route exact path="/interview/:interviewID" component={Interview}/>
            <Route exact path="/behavior" component={Behavior} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="*" component={NotFound } />
            </Switch>
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
