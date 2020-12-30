import React, { Component } from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react'; // Contrains the width  of all the components inside of it on a webpage
import Head from 'next/head';

// Below {props.children} will be the stuff (the components that would import this file)
//that will be wrapped inside our this component.

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <Container>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
        </Head>
        <Header numberOfCampaigns={this.props.numberOfCampaigns} />
          {this.props.children}
      </Container>
    );
  }
}

export default Layout;
