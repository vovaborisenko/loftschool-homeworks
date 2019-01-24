import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

class OutboxList extends Component{
  render(){
    const {data:{outbox}, ...props} = this.props;
    return <MailList {...props} data={outbox} purpose='outbox'/>
  }
}

export default withData(OutboxList);
// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
