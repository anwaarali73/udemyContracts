// This component is to increase the portability of redering individual rows in our
// requests/index.js file. We will have a renderRows() helper function in requests/index.js
// file that will setup this component and then in return this component will return our jsx
// to be rendered in our main requests/index.js file

import React, { Component } from 'react';
import { Table, Button, Message, Form } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import { Router } from '../routes';

class RequestRow extends Component {
  state = {
    loadingA: false,
    loadingF: false,
  };
  onApprove = async () => {
    this.setState({ loadingA: true });
    try {
      const accounts = await web3.eth.getAccounts();
      const campaign = await Campaign(this.props.address);
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      // TODO
    }
    this.setState({ loadingA: false });
  };

  onFinalise = async () => {
    this.setState({ loadingF: true });
    try {
      const accounts = await web3.eth.getAccounts();
      const campaign = await Campaign(this.props.address);
      await campaign.methods.finaliseRequest(this.props.id).send({
        from: accounts[0]
      });
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      // TODO
    }
    this.setState({ loadingF: false });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalise = request.approvalCount > (approversCount / 2);
    return(
      <Row disabled={request.complete} positive={readyToFinalise && !request.complete}>
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>
        <Cell>{request.recipient}</Cell>
        <Cell>{request.approvalCount}/{approversCount} ({(request.approvalCount/approversCount)*100}%)</Cell>

        {request.complete || (request.approvalCount == approversCount) ? null : (
          <Cell><Button error loading={this.state.loadingA} color='green' basic labelPosition='left' icon='arrow up' content='Approve' onClick={this.onApprove} /></Cell>
          )
        }

        {request.complete ? null : (
          <Cell><Button error loading={this.state.loadingF} color='blue' basic labelPosition='left' icon='thumbs up outline' content='Finalise' onClick={this.onFinalise} /></Cell>
          )
        }
      </Row>
    );
  }
}

export default RequestRow;
