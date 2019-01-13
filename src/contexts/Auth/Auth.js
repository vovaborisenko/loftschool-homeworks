import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  state = {
    email: '',
    authorizeError: '',
    isAuthorized: false,    
  }

  authorize = (login, password) => {
    if (login === 'stu@dent.com' && password === '123') {
      this.setState({
        email: login,
        authorizeError: '',
        isAuthorized: true
      })
    } else {
      this.setState({
        authorizeError: 'Email или пароль введён не верно'
      })
    }
  }

  logout = () => {
    this.setState({
      email: '',
      isAuthorized: false
    })
  }

  getProviderValue = () => {
    return {
      email: this.state.email,
      isAuthorized: this.state.isAuthorized,
      authorizeError: this.state.authorizeError,
      authorize: this.authorize,
      logout: this.logout 
    }
  }

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
