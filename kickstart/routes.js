// Refer to the README for why we are using next-routes
// The empty () signifies that the require returns a function
// which is immediately invoked afterwards
const routes = require('next-routes')();

// Following we pass in a wildcard entry which will be
// address of the campaign a user want to see. We will pass
// on this property as a prop from another component. We access
// this wildcard passed entry by using a : as follows.
// The second argument is then the show.js file which will contain the
// relevant content for the clicked campaign at a specific address

routes
  .add('/campaigns/new', 'campaigns/new')
  .add('/campaigns/:address', '/campaigns/show')
  .add('/campaigns/:address/requests', '/campaigns/requests/index')
  .add('/campaigns/:address/requests/new', '/campaigns/requests/new');



module.exports = routes;
