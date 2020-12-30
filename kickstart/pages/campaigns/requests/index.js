import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import { Button } from 'semantic-ui-react';
import factory from '../../../ethereum/factory';

class RequestIndex extends Component {
  // getInitialProps is different from the general props. getInitialProps referes to the data
  // we send to this component from the outside
  static async getInitialProps(props) {
    const { address } = props.query; // This destructuring is the same as const address = props.query.address
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    // Following is the same as return { address: address }; // when key values are the same we can shorten the syntax like below
    return { address, campaigns };   // This will be passed below as props for the render methods
  }

  render() {
    return (
      <Layout numberOfCampaigns={this.props.campaigns.length}>
        <h3>Open requests for campaign at: {this.props.address}</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>
              Create a request
            </Button>
          </a>
        </Link>
      </Layout>
    );
  }
}

export default RequestIndex;
