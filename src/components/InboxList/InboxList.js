import React, { Component } from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

class InboxList extends Component{
    render(){
        const {data:{inbox}, ...props} = this.props;

        return <MailList {...props} data={inbox} purpose='inbox'/>
    }
}

export default withData(InboxList);
// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
