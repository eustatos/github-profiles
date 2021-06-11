import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { someAction } from '../../actions/app';
import { appConstant } from '../../constants/app';

function App({ someAction, someProp }) {
    useEffect(() => {
        setTimeout(() => someAction('someValue'), appConstant);
    }, []);

    return (
        <div className="app">
            React + Redux = 
            { `${ someProp ? ' ' + someProp : ' ?' }` }
        </div>
    );
}

const mapDispatchToProps = {
    someAction
}

const mapStateToProps = state => ({
    someProp: state.someReducer.someProp
})

const appContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default appContainer;