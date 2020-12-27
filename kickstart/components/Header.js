import React from 'react';
import { Menu } from 'semantic-ui-react';

// For a component prop like in <Menu> below we have {jsx here}
// and {{actual object literal like css styling in our case}}
export default () => {
  return(
    <Menu style={{ marginTop:'10px' }}>
      <Menu.Item>
        FinalCoin
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          Campaigns
        </Menu.Item>

        <Menu.Item>
          +
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};
