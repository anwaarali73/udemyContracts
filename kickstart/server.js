// This file will bootup our next application and link
// it to our routes.js file for dynamic navigation of our
// app

const { createServer } = require('http');
const next = require('next');

const app = next({
  // We specify that this is not for production use
  dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes.js');
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  // The first argument to .listen is the port number
  createServer(handler).listen(3000, (err) => {
    if(err) throw err;
    console.log('Everything server setup and listening on localhost 3000');
  });
});
