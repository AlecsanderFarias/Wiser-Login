import React from 'react';

import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { useSelector } from 'react-redux';
import DefaultLayout from '../../pages/_layouts/Default';


interface PrivateProps {
  component: any
}

interface authProps{
  auth: {
    token: string
  };
}

const PrivateRoute: React.FC<PrivateProps> = ({ component: Component, ...rest }) => {
  const token = useSelector((state: authProps) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <DefaultLayout >
            <Component {...props} />
          </DefaultLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
