import react, { Component } from 'react';
// Following is an already deployed version of Campaign contract we load it up here in this file
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Message, Form, Button, Input } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import factory from '../../../ethereum/factory';

class newRequest extends Component {
  state = {
    description:'',
    value:'',
    recipient:'',
    errorMessage:'',
    loading:false,
    currentAccount:'',
    currentBalance:'',
    campaign: '',
    manager: ''
  };

  // We need the address of the relevant campaign we are interested in and that is
  // why use getInitialProps to extract it
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { address, campaigns };
  }

  onCurrentCreds = async () => {
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    // First we load up the relevant instance of the campaign at the specified address that we are receiving in our
    // getInitialProps
    const campaign = await Campaign(this.props.address);
    const manager = await campaign.methods.manager().call();
    this.setState({ currentAccount: accounts[0], currentBalance: balance, campaign, manager });
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      // Now we destructure our relevant state constants for the createRequest parameters

      const { campaign, description, value, recipient } = this.state;

      // Now we create a request for funding for this campaign
      await campaign.methods.createRequest(
        description,
        web3.utils.toWei(value, 'ether'),
        recipient
      ).send({ from: this.state.currentAccount });

      // After the successfull request creation we redirect our users back to the request index page
      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
      this.setState({ campaignTime });
    } catch (err) {
        this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return(
      <Layout numberOfCampaigns={this.props.campaigns.length} onCurrentCreds={this.onCurrentCreds()}>
      <Link route={`/campaigns/${this.props.address}/requests`}>
        <a>
          <Button secondary icon="left chevron" content="Back to campaign requests" />
        </a>
      </Link>
      <h3>Create a new request for campaign at: {this.props.address}</h3>
      <h3>Campaign manager: {this.state.manager} (only the manager can create requests)</h3>
      <h4>You are at account: {this.state.currentAccount}</h4>
      <h4>Your balance is: {this.state.currentBalance} ether</h4>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Description: </label>
          <Input
            value={this.state.description}
            onChange={event => this.setState({description: event.target.value})}
            placeholder='Enter request description'
          />
        </Form.Field>

        <Form.Field>
          <label>Value (ether): </label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label='ether'
            labelPosition='right'
            placeholder='Enter value in ether'
          />
        </Form.Field>

        <Form.Field>
          <label>Recipient: </label>
          <Input
            value={this.state.recipient}
            onChange={event => this.setState({ recipient: event.target.value })}
            label='address (public key)'
            labelPosition='right'
            placeholder='Enter recipient address (its public key)'
          />
        </Form.Field>

        <Message
          error
          header='Following went wrong while transacting'
          content={this.state.errorMessage}
        />

        <Button primary loading={this.state.loading} content="Create request" />
      </Form>
      </Layout>
    );
  }
}

export default newRequest;
