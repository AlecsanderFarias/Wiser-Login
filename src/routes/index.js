import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';

//Auth Routes
import SignIn from '../pages/Auth/SignIn';

//Default Routes

import Home from '../pages/Default/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/" component={SignIn} exact />

        <PrivateRoute path="/home" isPrivate component={Home} exact />

        <PrivateRoute path="*" isPrivate component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
