// This component is to increase the portability of redering individual rows in our
// requests/index.js file. We will have a renderRows() helper function in requests/index.js
// file that will setup this component and then in return this component will return our jsx
// to be rendered in our main requests/index.js file

import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {
  onApprove = async () => {
    const accounts = await web3.eth.getAccounts();
    const campaign = await Campaign(this.props.address);
    await campaign.methods.approveRequest(this.props.id).send({
      from: accounts[0]
    });
  };

  onFinalise = async () => {
    const accounts = await web3.eth.getAccounts();
    const campaign = await Campaign(this.props.address);
    await campaign.methods.finaliseRequest(this.props.id).send({
      from: accounts[0]
    });
  };

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
        <Cell><Button color='green' basic labelPosition='left' icon='arrow up' content='Approve' onClick={this.onApprove} /></Cell>
        <Cell><Button color='blue' basic labelPosition='left' icon='thumbs up outline' content='Finalise' onClick={this.onFinalise} /></Cell>
      </Row>
    );
  }
}

export default RequestRow;
