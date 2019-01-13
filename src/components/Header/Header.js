import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import Button from '../Button'
import './Header.css';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
            {({ isAuthorized, logout, email }) =>
              isAuthorized ? (
                <div className='header__content'>
                  <p className='t-header-email'>
                    {email}
                  </p>
                  <Button className='t-logout' onClick={logout}>
                    Выйти
                  </Button>
                </div>
              ) : (
               ''
              )
            }
          </AuthConsumer>
    );
  }
}

export default Header;
