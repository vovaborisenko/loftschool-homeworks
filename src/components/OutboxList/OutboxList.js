import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';
import truncate from 'lodash/truncate';



class OutboxList extends Component {
    render() {
        const { data: { outbox }
        } = this.props;

        return <MailList className='t-outbox-list'
            body={outbox.map(({ id, body }) => ({
                title: `${truncate(body, 55)}...`,
                link: `outbox/${id}`
            }))} />
    }
}

export default withData(OutboxList);
// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
