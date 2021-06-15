import React from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import Profile from '../../pages/Profile';
import Repo from '../../pages/Repo';
import { someAction } from '../../actions/app';

function App({ isAuthenticated }) {
    if (!isAuthenticated) {
        return <Login />;
    }

    return (
        <div className="app">
            <Switch>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/repo/:id" component={Repo} />
                <Route exact path="/logout" component={Logout} />
                <Redirect from="/" to="/profile" />
            </Switch>
        </div>
    );
}

const mapDispatchToProps = {
    someAction
};

const mapStateToProps = state => ({
    isAuthenticated: state.loginReducer.isAuthenticated
});

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;
