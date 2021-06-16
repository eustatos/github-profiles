import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import Repo from '../../pages/Repo';
import Page404 from '../../pages/Page404';
import ProtectedRoute from '../Protected-Route';
import Header from '../../components/header';
import { deleteSession } from '../../actions/login';

function App({ logout, user }) {
    return (
        <div className="app">
            <Header
                logout={logout}
                user={user}
            />
            <Switch>
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/" component={Profile} />
                <ProtectedRoute path="/repo/:id" component={Repo} />
                <Route path="*" component={Page404} />
            </Switch>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.loginReducer.username
});

const mapDispatchToProps = {
    logout: deleteSession
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
