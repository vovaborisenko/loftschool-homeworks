import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render(){
    const {component: Componenta, isAuthorized, ...rest} = this.props;

    return (
      <Route
        { ...rest }
        render = { props => isAuthorized
          ? <Componenta { ...props }/>
          : <Redirect to='/login'/>
        }
      />
    )
  }
}

export default withAuth(PrivateRoute);
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.