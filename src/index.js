import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import {Route, Switch} from 'react-router'
import Login from './containers/Login';
import PrivateRoute from './containers/PrivateRoute';
import configureStore, { history } from './store'

const store = configureStore()

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/watering-control-frontend/login/" component={Login} />
                <PrivateRoute path="/watering-control-frontend/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
