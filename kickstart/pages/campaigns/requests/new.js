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
    loading:'',
    currentAccount:'',
    currentBalance:'',
  };

  // We need the address of the relevant campaign we are interested in and that is
  // why use getInitialProps to extract it
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { address, campaigns };
  }

  render() {
    return(
      <Layout numberOfCampaigns={this.props.campaigns.length}>
      <h3>Create a new request for campaign at: {this.props.address}</h3>
      <Form>
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

        <Button primary>Create request</Button>
      </Form>
      </Layout>
    );
  }
}

export default newRequest;
