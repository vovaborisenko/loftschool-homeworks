import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import styles from './MailList.module.css';
import cx from 'classnames';

class MailList extends Component {

    render() {
        const { body, className } = this.props;
        console.log(this.props)
        return (
            <div className={cx(styles.container, className)}>
                {body.map(({ title, link }) =>
                    <Link exact to={link} key={link} className={styles.link}>
                        {title}
                    </Link>
                )}
            </div>
        )
    }
}

export default MailList;
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.
