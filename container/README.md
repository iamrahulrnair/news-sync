## Container service

As the name says, it is the parent for all services. Every services are integrated  here.  Container service uses remote-entry file of corresponding services to determine the components to be mounted in the DOM. Since this is a single page application Services are loaded lazy, that is only loaded when required. This flow makes the **NewSync** little bit faster as JS chunks from webpack are not loaded unnecessarily, only if the user visits the component page.    

To work with this module locally,

 - clone the repo
 - start all the services to be hosted
 - change directory into container
 - npm install --force
 - npm start
 
 That simple 😄

> It is advisable to not touch the **Webpack** configs as it may rupture the whole application. 

 
