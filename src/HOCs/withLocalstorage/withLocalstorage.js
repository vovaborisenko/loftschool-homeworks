import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, initValue) => WrappedComponent => {
    return class extends Component {
        saveData = (data) => {
            save(localStorageKey, data)
            this.forceUpdate();
        }

        savedData = () => load(localStorageKey) || initValue;

        render () {
            return (
                <WrappedComponent
                    savedData={this.savedData()}
                    saveData={this.saveData}
                    {...this.props}
                />
            );
        }
    };
};

export default withLocalstorage;
