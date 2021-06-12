import React from 'react';
import { connect } from 'react-redux';

import Login from '../../pages/Login';
import Logout from '../../pages/Logout';
import { someAction } from '../../actions/app';

function App() {
    return (
        <div className="app">
            <Logout />
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
