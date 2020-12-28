// This file will dynamically show the relevant campaign
// specific content to the user. The routing rule for this
// dynamic routing is described in routes.js

import React, { Component }  from 'react';
import Layout from '../../Layout';

class CamapaignShow extends Component {
  render() {
    return (
        <Layout>
          <h1>Show the relevant campaign.</h1>
        </Layout>
    );
  }
}

export default CamapaignShow;
