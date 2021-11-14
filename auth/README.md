## Auth service

This Service manages  authentication across the application. For the sake of Simplicity user sessions are not managed and **Redux** or any state management libraries are not used, session lifetime will be as of webpage's.

Components in Authentication service includes a Sign in and Signup form , these are dummy forms, doesn't require a user input. On submission the corresponding state  gets updated and this state gets transferred to other interested services and thereby creates a fake authentication service.

To work with this module locally,

 - clone the repo
 - change directory into auth
 - npm install --force
 - npm start
 
 That simple 😄



> It is advisable to not touch the **Webpack** configs as it may rupture the whole appllication. 

 


