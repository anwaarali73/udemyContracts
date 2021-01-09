// This file will dynamically show the relevant campaign
// specific content to the user. The routing rule for this
// dynamic routing is described in routes.js

// We will also be sending a rendered campaing's address to the ContributeForm

import React, { Component }  from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';
// Following we import Link tag from our routes.js file for the user to navigate
// to the requests page for the campaign being rendered on this page. A corresponding
// routes entry will be .added to the file as well.
import { Link } from '../../routes';
// To enable users to have the ability to contribute while looking at a specific
// campaign's details
import ContributeForm from '../../components/ContributeForm';

class CamapaignShow extends Component {
  // getInitialProps loads up some data for the class before it renders
  // props object passed into it is different which gets passed to the render
  // methods: more study is required. We extract our wildcard token containing the
  // address of the relevant campaign URL by using props.query.address
  // It will get updated automatically when user tries to access this page after
  // clicking the address of a campaign on the index.js file
  static async getInitialProps(props) {
    //console.log(props.query.address) // Passed from index.js and manipulated using the rule in routes.js
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();  // Summary will be returned as an object
    const numberOfCampaigns = await factory.methods.getDeployedCampaigns().call();
    //console.log(summary);
    // Following we destrcture the summary object above and pass them to return as props for our render method
    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      address: props.query.address,
      numberOfCampaigns: numberOfCampaigns.length,
    };
  }

  renderCards() {
      // First we destructure the stuff returned by the above contract in a handy manner as follows
      const {
        minimumContribution,
        balance,
        requestCount,
        approversCount,
        manager
      } = this.props;
      // Following, items is an array of objects that are passed as props to our Card tag
      // if confused you can look up the documentation for it at semantic ui react
      // each object corresponds to each of the attributes of a campaign such as its manager, balance, etc
      const items = [
        {
          header: 'Created by: ' + manager,
          meta: 'Address of the campaign creator (or manager)',
          description: 'Manager can create requests for money withdrawls',
          style: { overflowWrap: 'break-word' }
        },
        {
          header: 'Min. Contribution: ' + minimumContribution + ' wei',
          meta: 'Minimum amount in wei',
          description: 'Minimum amount in wei required to become a contributor to this campaign'
        },
        {
          header: 'Balance: ' + web3.utils.fromWei(balance, 'ether') + ' ether',
          meta: 'Campaign\'s current balance (ether).',
          description: 'The current amount of money contributed to the campaign so far.'
        },
        {
          header: 'Requests: ' + requestCount,
          meta: 'Number of open requests for campaign.',
          description: 'Each request much be approved by the campaign contributors'
        },
        {
          header: 'Approvers: ' + approversCount,
          meta: 'Number of contributions',
          description: 'Number of people who have contributed to this campaign.'
        },
      ];
      return <Card.Group items={items} />;
}

  render() {
    return (
        <Layout numberOfCampaigns={this.props.numberOfCampaigns}>
          <h3>Details of campaign at: {this.props.address}</h3>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                {this.renderCards()}
              </Grid.Column>
              <Grid.Column width={6}>
                <ContributeForm address={this.props.address} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>View campaign requests</Button>
                </a>
              </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Layout>
    );
  }
}

export default CamapaignShow;
