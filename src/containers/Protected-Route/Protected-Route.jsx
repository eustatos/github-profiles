/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to="/login" />
        )}
    />
);

const mapStateToProps = state => ({
    isAuthenticated: state.loginReducer.isAuthenticated
});

export default connect(mapStateToProps)(ProtectedRoute);
