'use strict';

// Refer to the README for why we are using next-routes
// The empty () signifies that the require returns a function
// which is immediately invoked afterwards
var routes = require('next-routes')();

// Following we pass in a wildcard entry which will be
// address of the campaign a user want to see. We will pass
// on this property as a prop from another component. We access
// this wildcard passed entry by using a : as follows.
// The second argument is then the show.js file which will contain the
// relevant content for the clicked campaign at a specific address

routes.add('/campaigns/new', 'campaigns/new').add('/campaigns/:address', '/campaigns/show');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FDRyxBQURILElBQ08sQUFEUCxrQkFDeUIsQUFEekIsaUJBRUcsQUFGSCxJQUVPLEFBRlAsdUJBRThCLEFBRjlCOztBQU1BLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxpL3VkZW15Q29udHJhY3RzL2tpY2tzdGFydCJ9