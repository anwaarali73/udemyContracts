* The web interface of the kickstart project is going to involve next.js
* This wraps around react to create a multi-page web app for our ethereum project
* React alone only manages single page application. Like we did in the lottery contract
* We are going to have a 'pages' directory for next. And each file inside the pages directory will be a react component
* We then need to figure out how to setup routing for the relevant page view
* In order to automate the next functionality we add `"dev": "next dev"` in a similar manner what we did with mocha (`"test": "mocha"`) for our testing setup
* And just like for mocha testing (`npm run test`) we use `npm run dev` to activate next
* (**Core ingredient respect: Next.js**) *Next.js is a server side redering mechanism*. So it is quite important to write some ethereum-related data fetching on the server side as well. This means our **web3.js** file is not going to work as such. It will throw a **window not defined error** as our Next server does not know about what is happening inside a client's browser.
* In our project we are going to use dynamic routing from the **index.js** page. Which means the URL will change depending upon the **campaign address** clicked. Next, as such, does not support this kind of a functionality so instead **next-routes** package is used for dynamic routing purposes.
* [Next js](https://nextjs.org/) [Next js at github](https://github.com/vercel/next.js/) [next-routes at github](https://github.com/fridays/next-routes).
* **IMPORTANT:** after the above **next-routes**  setup we change our script command in our root directory's **package.json** for `next` from `"dev": "next dev"` to `"dev": "node server.js"`. But like before, in order to start our application we again issue `npm run dev` command on our terminal.
