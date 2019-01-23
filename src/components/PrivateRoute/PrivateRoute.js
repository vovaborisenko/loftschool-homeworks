import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render(){
    const {component: RouteCompanent, isAuthorised, ...rest} = this.props;
    
    return <Route
      {...rest}
      // eslint-disable-next-line react/jsx-no-bind
      render = {routeProps => (isAuthorised ? 
        (<RouteCompanent {...routeProps}/>) :
        (<Redirect to="/"/>)
      )}
    />
  }
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
}

export default withAuth(PrivateRoute);
