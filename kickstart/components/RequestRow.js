// This component is to increase the portability of redering individual rows in our
// requests/index.js file. We will have a renderRows() helper function in requests/index.js
// file that will setup this component and then in return this component will return our jsx
// to be rendered in our main requests/index.js file

import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class RequestRow extends Component {
  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    return(
      <Row>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>{request.approvalCount}/{approversCount} ({(request.approvalCount/approversCount)*100}%)</Cell>
        <Cell></Cell>
        <Cell></Cell>
      </Row>
    );
  }
}

export default RequestRow;
