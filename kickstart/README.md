* The web interface of the kickstart project is going to involve next.js
* This wraps around react to create a multi-page web app for our ethereum project
* React alone only manages single page application. Like we did in the lottery contract
* We are going to have a 'pages' directory for next. And each file inside the pages directory will be a react component
* We then need to figure out how to setup routing for the relevant page view
* In order to automate the next functionality we add `"dev": "next dev"` in a similar manner what we did with mocha (`"test": "mocha"`) for our testing setup
* And just like for mocha testing (`npm run test`) we use `npm run dev` to activate next
