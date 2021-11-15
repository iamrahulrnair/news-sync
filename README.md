## NewSync

A micro front-end application with 4 front-end services which are decoupled from each other. **NewSync** provides information about cryptocurrency and implements a basic authentication for depicting data transfer between services. Each services in **NewSync** is implemented with React,  but can be implemented with other framework or vanilla JavaScript itself as long as your code/ framework  can manage its own  **state**.

**NewSync** would not be possible without module-federation system of Webpack, such a cool feature. Kudos to the team behind it 🥳.

**NewSync** also takes care of faster deployment with the help of CI-CD pipeline. main branch act as the trigger for new production build, any push to main of **container** repository can result in a new build. Bundle files are stored in S3 bucket and made accessible through AWS cloudfront.

check out [NewSync](https://d10zs3wtfmumcd.cloudfront.net/) here.

check out [How to configure tailwind in webpack](https://medium.com/@iamrahulrnair/how-i-configured-tailwind-in-webpack-for-my-micro-front-end-application-8f0412978bc5) here.


> **Read more about each services in the corresponding directories**
