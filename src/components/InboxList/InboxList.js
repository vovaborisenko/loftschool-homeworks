import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';
import truncate from 'lodash/truncate';


class InboxList extends Component {
    render() {
        const { data: { inbox }
        } = this.props;

        return (
            <MailList 
                className='t-inbox-list'
                body = { inbox.map( ( { id, body } ) => ( {
                    title: `${truncate(body, 55)}...`,
                    link: `inbox/${id}`
                }))}
            />
        );
    }
}

export default withData(InboxList);
// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
