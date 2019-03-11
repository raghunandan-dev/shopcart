import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export const PrivateRoute = ( {component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            :  <Redirect to = {{ pathName: '/login' }} />
    )}/>
)
