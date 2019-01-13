import React, { PureComponent } from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({isAuthorized, email}) => 
          !isAuthorized ? (
            <div className='footer__content'>
              <p className='t-footer'>
                Вы гость в этой системе
              </p>
            </div>
          ) : (
            <div className='footer__content'>
              <p className='t-footer'>
                Вы вошли как {email}
              </p>
            </div>
          )
        }
      </AuthConsumer>
    )
  }
}

export default Footer;
