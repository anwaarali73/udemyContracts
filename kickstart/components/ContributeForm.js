// To enable users to have the ability to contribute while looking at a specific
// campaign's details. This will be used in show.js file

// We will be receiving the address of the relevant and currently redered campaign
// from show.js and we will send user's money to this specific campaign's address

import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

// Following we will import campaign.js to load up the relevant campaign whose
// address we are receiving from show.js and is currently being rendered
import Campaign from '../ethereum/campaign';

import { Router } from '../routes';

class ContributeForm extends Component {
  state = {
    currentAccount:'',
    currentBalance:'',
    currentBlock: '',
    numberOfTransactions: '',
    value: '',
    loading: false,
    errorMessage: ''
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage:'' });
    // Now we load up our relevant instance of the campaign
    const campaign = Campaign(this.props.address);
    try
    {
      await campaign.methods.contribute().send({
      from: this.state.currentAccount,
      value: web3.utils.toWei(this.state.value, 'ether')
      });
      // After the above we refresh the page to show the updated campaign data
      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    // We set value: '' to clear the contribute form after the page reload
    this.setState({ loading: false, value: '' });
  };

  // Following function is just to show the user what account he is using at the moment
  onEnter = async () => {   // !Console gives some warning regarding the usage of this function in <div> if works fine but see if you can fix the warning!
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const numberOfTransactions = await web3.eth.getTransactionCount(accounts[0]);
    const currentBlock = await web3.eth.getBlockNumber();
    this.setState({ currentAccount: accounts[0], currentBalance: balance, numberOfTransactions, currentBlock });
  };
  render() {
    return (
      <div onEnter={this.onEnter()}>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Contribute to this campaign: </label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({value: event.target.value})}
            label='ether'
            labelPosition='right'
            placeholder='Enter amount in ether'
          />
        </Form.Field>

        <Message
          error
          header='Following went wrong while transacting!'
          content={this.state.errorMessage}
        />

        <Button
          primary
          loading={this.state.loading}
          >
            Contribute
        </Button>
      </Form>
      <h4>Current block: {this.state.currentBlock}</h4>
      <h4>Your account: {this.state.currentAccount}</h4>
      <h4>Your balance: {this.state.currentBalance} ether</h4>
      <h4>Your total transactions: {this.state.numberOfTransactions}</h4>
    </div>
    );
  }
}

export default ContributeForm;
