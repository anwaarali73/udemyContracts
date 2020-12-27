// Each such file in pages directory will be a react component

import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';



// Now we import our deployed instance of CampaignFactory from factory.js
import factory from '../ethereum/factory';

class CampaignIndex extends Component {
  // For next we replace react specific componentDidMount with static getInitialProps
  // which is specific to next js. It does the (ethereum-related) data fetching here
  // for the compenent without rendering it (thus making it more cost effective) and passes the fetched data to the props of
  // the compenent for it to render. And can then be accessible wit this.props.<data>
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    // Following is the same as return {campaigns: campaigns}
    return { campaigns };
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
        header: address,
        description: <a>View the campaign</a>,
        // To make the card fit the window width
        fluid: true
      }
    });
    return <Card.Group items={items} />
  }

  render() {

    return (
      <div>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        {this.renderCampaigns()}
        <Button
          content="Create a new campaign"
          icon="add"
          primary
        />
      </div>
      );
  }
}

export default CampaignIndex;
