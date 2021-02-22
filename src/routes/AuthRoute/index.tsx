import React from 'react';

import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthLayout from '../../pages/_layouts/Auth';


interface LoginProps {
  component: any
}

interface authProps{
  auth: {
    token: string
  };
}


const LoginRoute: React.FC< LoginProps>  = ({ component: Component, ...rest }) => {
  const token = useSelector((state: authProps) => state.auth.token);

  return (
    <Route
      {...rest}
      render={(props) =>
        !token ? (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        ) : (
          <Redirect to="/home" />
        )
      }
    />
  );
};

LoginRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default LoginRoute;
