import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import factory from '../../../ethereum/factory';
import web3 from '../../../ethereum/web3';
// We import our already deployed Campaign instance and load it up here
import Campaign from '../../../ethereum/campaign';

// Following import is for the component that makes redering our individual requests
// quite portable and concise
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
  state = {
    currentAccount:'',
    currentBalance:'',
  };
  // getInitialProps is different from the general props. getInitialProps referes to the data
  // we send to this component from the outside
  static async getInitialProps(props) {
    const { address } = props.query; // This destructuring is the same as const address = props.query.address
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    // Now up untill solidity 0.4.17 there is no support to return an array of structs
    // or user defined data types in general. That is why we make use of some fancy js
    // to handle multiple calls to our Campaign instance to extract all the requests in one go
    // As each call to a smart contract method involves the resolution of a 'promise' so we make
    // use of promise.all() method to extract all the requests' data and populate an array for
    // further use with it as follows.

    // First we load up our relevant Campaign instance at the specifed address that we are receiving in this
    // component's getInitialProps method.

    const campaign = Campaign(address);

    // Now lets extract how many requests this instance of Campaign already has
    const requestCount = await campaign.methods.getRequestsCount().call();
    //console.log(requestCount);

    // Following we get approversCount, all the nodes who contributed financially to the campaign
    // we will use this to calculate if 51% of the approvers have voted yes for a request or not
    // in order to finalise it
    const approversCount = await campaign.methods.approversCount().call();

    // Some general managerial information below to finalise the request
    const manager = await campaign.methods.manager().call();
    // And now the extraction of all the requests' structs in the form of of an array of structs
    // Index would be the index of a request
    const requests = await Promise.all(
      Array(parseInt(requestCount)).fill().map((element, index) => {
        // requests is the public array of structs we created in our Campaign.sol file
        return campaign.methods.requests(index).call();
      })
    );

    //console.log(requests);

    // Following is the same as return { address: address }; // when key values are the same we can shorten the syntax like below
    return { address, campaigns, requests, requestCount, approversCount, manager };   // This will be passed below as props for the render methods
  }

  // Following helper function is to configure our /components/RequestRow.js file
  // whenever you try to return a list of items in react it expect a unique key for each item
  // that is why we use request index as a key for each individual request
  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approversCount={this.props.approversCount}
        />
      );
    });
  }

  // Following function is just to show the user what account he is using at the moment
  onEnter = async () => { // This outputs a warning in <div> need to figure it out
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const campaign = await Campaign(this.props.address);
    const approver = await campaign.methods.approvers(accounts[0]).call();
    this.setState({ currentAccount: accounts[0], currentBalance: balance, approver});
  };

  render() {
    // Following is the fancy es2015 destructuring for the Table tag to make its use easier
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <div onEnter={this.onEnter()}>
      <Layout numberOfCampaigns={this.props.campaigns.length}>
          <h3>Open requests for campaign at: {this.props.address}</h3>
          <h4>51% votes are required for any request to be approved.</h4>
          <h4>Campaign manager: {this.props.manager} (only the manager can finalise the request)</h4>
          <h4>You are at account: {this.state.currentAccount}</h4>
          <h4>Your balance: {this.state.currentBalance}</h4>
          <h4>Only approvers can approve a request</h4>
          {this.state.approver ?
            (<h4 style={{ color:'green' }}>You are an approver</h4>) : (<h4 style={{ color:'red' }}>You are not an approver yet</h4>)
          }
        <hr />
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated='right' style={{ marginBottom: 10 }} labelPosition="right" icon="right chevron" content="Create a request" />
          </a>
        </Link>
        <Link route={`/campaigns/${this.props.address}`}>
          <a>
            <Button secondary floated='right' style={{ marginBottom: 10 }} icon="left chevron" content="Back to campaign details" />
          </a>
        </Link>
        <div><h5>Found {this.props.requestCount} requests.</h5></div>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Desciption</HeaderCell>
              <HeaderCell>Amount required (ether)</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approvals (Yes votes/contributors)</HeaderCell>
              <HeaderCell>Voted</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalise</HeaderCell>
              <HeaderCell>Tx latency</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
      </Layout>
    </div>
    );
  }
}

export default RequestIndex;
