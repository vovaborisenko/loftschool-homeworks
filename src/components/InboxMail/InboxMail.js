import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const { match: { params: { id } }, data } = this.props,
      mail = data.inbox.find( mail => mail.id === id );

    return <Mail {...mail} purpose='from'/>;
  }
}

export default withData(InboxMail);
