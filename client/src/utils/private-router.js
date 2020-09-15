import React from 'react';
import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        Cookies.get('express:sess') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signup',
            }}
          />
        )
      }
    />
  );
};
