import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import Repo from '../../pages/Repo';
import Page404 from '../../pages/Page404';
import ProtectedRoute from '../Protected-Route';

export default function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/" component={Profile} />
                <ProtectedRoute path="/repo/:id" component={Repo} />
                <Route path="*" component={Page404} />
            </Switch>
        </div>
    );
}
