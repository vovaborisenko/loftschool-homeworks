import React, {Component} from 'react';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import Home from '../Home';
import InboxList from '../InboxList';
import InboxMail from '../InboxMail';
import OutboxList from '../OutboxList';
import OutboxMail from '../OutboxMail';
import cx from 'classnames';
import styles from './AppRouter.module.css';

export default class AppRouter extends Component {
    render() {
        const {match} = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <ul className={cx(styles.navList, 't-nav-list')}>
                            <li className={styles.navElement}>
                                <Link exact className={cx(styles.link, 't-link-home')}>
                                    Home
                                </Link>
                            </li>
                            <li className={styles.navElement}>
                                <Link
                                    exact
                                    className={cx(styles.link, 't-link-inbox')}
                                    to='/app/inbox'
                                >
                                    Inbox
                                </Link>
                            </li>
                            <li className={styles.navElement}>
                                <Link
                                    exact
                                    className={cx(styles.link, 't-link-outbox')}
                                    to='/app/outbox'
                                >
                                    Outbox
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.content}>
                        <h3 className={styles.title}>
                            <Switch>
                                <Route exact path='/app' component={this.renderHomeTitle} />
                                <Route path='/app/inbox' component={this.renderInboxTitle} />
                                <Route path='/app/outbox' component={this.renderOutboxTitle} />
                            </Switch>
                        </h3>
                        <Switch>
                            <Route path={match.url} exact component={Home} />
                            <Route path={match.url + '/inbox'} exact component={InboxList} />
                            <Route path={match.url + '/inbox/:id'} component={InboxMail} />
                            <Route path={match.url + '/outbox'} exact component={OutboxList} />
                            <Route path={match.url + '/outbox/:id'} component={OutboxMail} />
                            <Redirect to='/app' />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }

    renderHomeTitle = () => 'Home';
    renderInboxTitle = () => 'Inbox';
    renderOutboxTitle = () => 'Outbox';
}
// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css
