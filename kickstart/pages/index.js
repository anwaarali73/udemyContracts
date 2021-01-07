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
  state = {
    currentAccount: '',
    currentBalance: '',
    currentBlock: '',
    timeStamp:'',
    numberOfTransactions: ''
  };
  onEnter = async () => {
    const accounts = await web3.eth.getAccounts();
    const currentAccount = accounts[0];
    const currentBalance = await web3.eth.getBalance(accounts[0]);
    const numberOfTransactions = await web3.eth.getTransactionCount(accounts[0]);
    const currentBlock = await web3.eth.getBlockNumber();
    const blockTimeStamp = await web3.eth.getBlock(currentBlock);
    console.log(blockTimeStamp);
    const timeStamp = new Date(blockTimeStamp.timestamp * 1000).toUTCString();
    console.log(timeStamp);
    this.setState({currentAccount, currentBalance, numberOfTransactions, currentBlock, timeStamp});
  };
  // For next we replace react specific componentDidMount with static getInitialProps
  // which is specific to next js. It does the (ethereum-related) data fetching here
  // for the compenent without rendering it (thus making it more cost effective) and passes the fetched data to the props of
  // the compenent for it to render. And can then be accessible wit this.props.<data>
  static async getInitialProps() {
    // Following call gives us addresses of all the deployed campaigns
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    const gasPrice = await web3.eth.getGasPrice();
    // Following is the same as return {campaigns: campaigns}
    return { campaigns, gasPrice };
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
      <Layout numberOfCampaigns={this.props.campaigns.length} onEnter={this.onEnter()}>
          <div>
            <h3>Open Campaigns: {this.props.campaigns.length}</h3>
            <h3>Current block: {this.state.currentBlock} created at: {this.state.timeStamp} </h3>
            <h3>Gas price: {this.props.gasPrice} </h3>
            <h3>Your account: {this.state.currentAccount}</h3>
            <h3>Your balance: {this.state.currentBalance} ether</h3>
            <h3>Your total transactions: {this.state.numberOfTransactions}</h3>
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
