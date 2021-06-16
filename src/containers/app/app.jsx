import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import Profile from '../../pages/Profile';
import Repo from '../../pages/Repo';
import Page404 from '../../pages/Page404';

export default function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/" component={Profile} />
                <Route exact path="/login" component={Login} />
                <Route path="/repo/:id" component={Repo} />
                <Route path="/logout" component={Logout} />
                <Route path="*" component={Page404} />
            </Switch>
        </div>
    );
}
