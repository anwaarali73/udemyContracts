import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button, Table } from 'semantic-ui-react';
import factory from '../../../ethereum/factory';
// We import our already deployed Campaign instance and load it up here
import Campaign from '../../../ethereum/campaign';

// Following import is for the component that makes redering our individual requests
// quite portable and concise
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {
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
    return { address, campaigns, requests, requestCount, approversCount };   // This will be passed below as props for the render methods
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

  render() {
    // Following is the fancy es2015 destructuring for the Table tag to make its use easier
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout numberOfCampaigns={this.props.campaigns.length}>
        <h3>Open requests for campaign at: {this.props.address}</h3>
        <Link route={`/campaigns/${this.props.address}`}>
          <a>
            <Button secondary icon="left chevron" content="Back to campaign details" />
          </a>
        </Link>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary labelPosition="right" icon="right chevron" content="Create a request" />
          </a>
        </Link>

        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Desciption</HeaderCell>
              <HeaderCell>Amount required (ether)</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approvals (Yes votes/contributors)</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalise</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default RequestIndex;
