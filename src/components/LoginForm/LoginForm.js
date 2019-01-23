import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from '../../context/Auth';
import classnames from 'classnames';
import styles from './LoginForm.module.css';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        const { authorize } = this.props;
        authorize(email, password);
    };

    render () {
        const { authError, isAuthorized } = this.props;
        const { email, password } = this.state;
            
        return isAuthorized ? (
            <Redirect to="/app" />
        ) : (
            <div className={styles.bg}>
                <form className={classnames(styles.form, 't-form')} onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="email">
                            <span className={styles.labelText}>Почта</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            className={classnames(styles.input, 't-input-email')}
                            value={email}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p>
                        <label htmlFor="password">
                            <span className={styles.labelText}>Пароль</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            className={classnames(styles.input, 't-input-password')}
                            value={password}
                            onChange={this.handleChange}
                        />
                    </p>

                    {authError === '' || <p className={styles.error}>{authError}</p>}
                    
                    <div className={styles.buttons}>
                        <button type="submit" className={classnames(styles.button, 't-login')}>
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withAuth(LoginForm);
// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app
