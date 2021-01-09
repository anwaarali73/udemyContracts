import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Input, Message } from 'semantic-ui-react';
// Ethereum related imports follow
// Importing the loaded CampaignFactory contract from our portable factory.js file
import factory from '../../ethereum/factory';

// And our configured web3 instance from web3.js file
import web3 from '../../ethereum/web3';

// Following import is for the dynamic routing that we setup
// based on next-routes package in our routes.js file in the root directory
import { Link, Router } from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    currentAccount: '',
    cuurentBalance: '',
    loading: false,
    tx_time: ''
  };

  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    this.setState({ tx_time: '' });
    const start_time = new Date();   // For transaction confirmation time

    // Following to catch error if transaction fails
    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({from: accounts[0]});

      const end_time = new Date();
      this.setState({ tx_time: (end_time-start_time) });
        // After the successfull execution of a transaction we re-route to our index.js page as follows
        //Router.pushRoute('/');
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }

    this.setState({ loading: false });
  };

  // Following function is just to show the user what account he is using at the moment
  onEnter = async () => {
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    this.setState({ currentAccount: accounts[0], currentBalance: balance});
  };
  render() {
    return (
      <div onEnter={this.onEnter()}>
      <Layout numberOfCampaigns={this.props.campaigns.length}>
        <h3>Create a new campaign:</h3>
        <h4>You are at account: {this.state.currentAccount}</h4>
        <h4>Your current balance: {this.state.currentBalance} ether</h4>
        <h4>Your transaction took: {this.state.tx_time} ms</h4>
        <hr />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum contribution</label>
            <Input
              label="wei"
              placeholder="Enter an amount in wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={event => this.setState({minimumContribution: event.target.value})}
            />
          </Form.Field>

          <Message error header="Following went wrong while transacting!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Create</Button>
        </Form>
      </Layout>
      </div>
    );
  }
}

export default CampaignNew;
