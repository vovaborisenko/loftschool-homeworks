import React from 'react';
import './Form.css';
import bond from './assets/bond_approve.jpg';


const rightData = {
    firstName: {
        value: 'james',
        error: 'Имя указано не верно',
        errorEmpty: 'Нужно указать имя'
    },
    lastName: {
        value: 'bond',
        error: 'Фамилия указана не верно',
        errorEmpty: 'Нужно указать фамилию'
    },
    password: {
        value: '007',
        error: 'Пароль указан не верно',
        errorEmpty: 'Нужно указать пароль'
    }
};

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        isValid: false,
        error: {}
    };

    changeHandler = (e) => {
        // this.setState({error: {}});
        this.setState({[e.target.name]: e.target.value});
    }

    validation = (e) => {
        e.preventDefault();
        const error = {};

        Object.keys(rightData).forEach(el => {
            if (!this.state[el]) {
                error[el] = rightData[el].errorEmpty;
            } else if ( this.state[el].toLowerCase() !== rightData[el].value ) {
                error[el] = rightData[el].error;
            }
        })

        this.setState({error, isValid: Object.keys(error).length === 0});
    }
    
    render() {
        const { firstName, lastName, password, isValid, error } = this.state;
        return !isValid ? 
        (<div className="app-container">
            <form onSubmit={this.validation} className="form">
                <h1>Введите свои данные, агент</h1>
                <p className="field">
                    <label className="field__label" htmlFor="firstname">
                        <span className="field-label">Имя</span>
                    </label>
                    <input onChange={this.changeHandler} className="field__input field-input t-input-firstname" type="text" name="firstName" value={firstName}/>
                    <span className="field__error field-error t-error-firstname">{error.firstName}</span>
                </p>
                <p className="field">
                    <label className="field__label" htmlFor="lastname">
                        <span className="field-label">Фамилия</span>
                    </label>
                    <input onChange={this.changeHandler} className="field__input field-input t-input-lastname" type="text" name="lastName" value={lastName}/>
                    <span className="field__error field-error t-error-lastname">{error.lastName}</span>
                </p>
                <p className="field">
                    <label className="field__label" htmlFor="password">
                        <span className="field-label">Пароль</span>
                    </label>
                    <input onChange={this.changeHandler} className="field__input field-input t-input-password" type="password" name="password" value={password}/>
                    <span className="field__error field-error t-error-password">{error.password}</span>
                </p>
                <div className="form__buttons">
                    <input type="submit" className="button t-submit" value="Проверить"/>
                </div>
            </form>
        </div>) : 
        (<div className="app-container">
            <img src={bond} alt="bond approve" className="t-bond-image"/>
        </div>)
    }
};
