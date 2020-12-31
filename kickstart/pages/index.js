// Each such file in pages directory will be a react component

import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import web3 from '../ethereum/web3';

// Now we import our deployed instance of CampaignFactory from factory.js
import factory from '../ethereum/factory';

// Link tag is for user navigation that we import from our routes.js file
import { Link } from '../routes';

class CampaignIndex extends Component {
  // For next we replace react specific componentDidMount with static getInitialProps
  // which is specific to next js. It does the (ethereum-related) data fetching here
  // for the compenent without rendering it (thus making it more cost effective) and passes the fetched data to the props of
  // the compenent for it to render. And can then be accessible wit this.props.<data>
  static async getInitialProps() {
    // Following call gives us addresses of all the deployed campaigns
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    const blockNumber = await web3.eth.getBlockNumber();
    const gasPrice = await web3.eth.getGasPrice();
    // Following is the same as return {campaigns: campaigns}
    return { campaigns, blockNumber, gasPrice };
  }
  // async componentDidMount() {
  //   const campaigns = await factory.methods.getDeployedCampaigns().call();
  //   console.log(campaigns);
  // }

  // Following is going to be a setup to make use of semantic ui
  // specifically we are making use of Card.Group which is a list of objects in 'items'

  renderCampaigns() {
    // The map function iterates over all the specified elements of the function passed to it
    // In our case we take address of each campaign and iterate over them to format them
    const items = this.props.campaigns.map(address => {
      return {
        // Following is a semantic ui specific syntax for Cards.Group
        header: 'Campaign at: ' + address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View the campaign</a>
          </Link>
        ),
        // To make the card fit the window width
        fluid: true
      }
    });
    return <Card.Group items={items} />
  }

  render() {

    return (
      <Layout numberOfCampaigns={this.props.campaigns.length}>
          <div>
            <h3>Open Campaigns: {this.props.campaigns.length}</h3>
            <h3>Current block: {this.props.blockNumber} </h3>
            <h3>Gas price: {this.props.gasPrice} </h3>
            <Link route="/campaigns/new">
              <a>
                <Button
                  floated="right"
                  content="Create a new campaign"
                  icon="add"
                  primary
                />
              </a>
            </Link>
            {this.renderCampaigns()}
          </div>
      </Layout>
      );
  }
}

export default CampaignIndex;
