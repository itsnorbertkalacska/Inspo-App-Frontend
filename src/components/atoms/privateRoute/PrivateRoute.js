import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      render={routeProps =>
        props.isLoggedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
      {...props}
    />
  );
};

const enhance = compose(
  connect(({ auth: { profile: { isLoggedIn } } }) => ({ isLoggedIn }))
);

export default enhance(PrivateRoute);
