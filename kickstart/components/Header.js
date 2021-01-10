import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import factory from '../ethereum/factory';

// Following we import Link from our routes.js directory for user naviation around
// the app. The Link tag clashes with with the Menu styling fo the Menu.Item
// will the replaced by Link tag instead. Link tag wraps the navigatin ability
// to its children and we specify the routing as Link tag's props
import { Link } from '../routes';
// For a component prop like in <Menu> below we have {jsx here}
// and {{actual object literal like css styling in our case}}

class Header extends Component {
  constructor(props) {
    super(props);
  this.state = {
    numberOfCampaigns: this.props.numberOfCampaigns
  };
  }
  render() {
    return(
      <Menu style={{ marginTop:'10px' }}>
        <Link route="/">
          <a className="item">
            JohnCoin
          </a>
        </Link>

        <Menu.Menu position="right">
        <Link route="/">
          <a className="item">
            Open campaigns ({this.state.numberOfCampaigns})
          </a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">
            +
          </a>
        </Link>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
