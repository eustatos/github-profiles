import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import UserProfile from '../../pages/User-profile';
import { someAction } from '../../actions/app';

function App({ isAuthenticated }) {
    if (!isAuthenticated) {
        return <Login />;
    }
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={UserProfile} />
                <Route exact path="/profile" component={UserProfile} />
                <Route exact path="/logout" component={Logout} />
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
