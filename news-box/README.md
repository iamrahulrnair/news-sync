## News-box service

This service take care of the main part of the UI, This service exposes two components, One for Landing page and latter for Settings which are available to logged in users. Logged in users are identified with the help of state that is passed  from auth via container (parent child communication). Users can visit the corresponding pages only if logged in, This service address many UI alignment features including Grid and  Flexbox.

 The API endpoint i used for getting news regarding cryptocurrencies is- https://api.currentsapi.services/ Freetier includes 600 reqs per month and limit set to 29 per request which i have used in **NewSync**


> The response may  lack CORS headers, so i have also used a reverse
> proxy such that the request/response goes through the proxy and the
> proxy attaches the relevant CORS headers. This allows the  browser to
> do the API call. [check here](https://github.com/Rob--W/cors-anywhere)

To work with this module locally,

 - clone the repo
 - change directory into news-box
 - npm install --force
 - npm start
 
 That simple 😄

> It is advisable to not touch the **Webpack** configs as it may rupture the whole application. 
