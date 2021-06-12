import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import { someAction } from '../../actions/app';

function App() {
    return (
        <div className="app">
            <Switch>
                <Route exact path="/"><Login /></Route>
            </Switch>
            <Switch>
                <Route exact path="/login"><Login /></Route>
            </Switch>
            <Switch>
                <Route exact path="/logout"><Logout /></Route>
            </Switch>
        </div>
    );
}

const mapDispatchToProps = {
    someAction
};

const mapStateToProps = state => ({
    someProp: state.someReducer.someProp
});

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;
