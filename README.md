# DevTinder

- Create a Vite + React application
- Remove unnecessary code and create a Hello World app
- Install Daisy UI
- Add NavBar Component to App.jsx
- Create a NavBar.jsx seperate component file
- Install react router
- Create BrowserRouter > Routes > Route=/Body > RouteChildren
- Create an Outlet in your Body Component
- Create a Footer Component
- Create Login Page
- Install axios
- CORS - install cors in backend => add middleware to with configurations : origin, credentials: true
- Whenever you're making API call so pass axios => {withCredentials:true}
- Install Redux Toolkit
- install react-redux + @reduxjs/toolkit
- configureStore => Provider => createSlice => add reducer to store
- Add redux devtools in chrome
- Login and see if your data is coming properly in the store
- NavBar should update as soon as user logs in
- Refactor our code to add constants file + create a components folder
- You should not be access other routes without login
- If token is not present , redirect user to login page
- Logout Feature
- Profile Page
- Get the feed and add in the store
- build the user card on feed
- Edit Profile Feature
- Show Toast Message on save of profile
- New Page - See all my connections
- New Page - See all my connections Requests
- Feature - Accept/Reject Connection Request
- Send/Ignore the user card from the feed
- SignUp New User
- E2E testing

Body
NavBar
Route=/ => Feed
Route=/login => Login
Route=/connections => Connections
Route=/profile => Profile

# Deployment

- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- Connect to ssh -i "DevMatch-secret.pem" ubuntu@ec2-13-60-2-249.eu-north-1.compute.amazonaws.com
- install Node version 20.17.
- Git Clone
- Frontend

  - npm install -> dependencies install
  - npm run build
  - sudo apt update
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - Copy code from dist(build files) to /var/www/html/
  - sudo scp -r dist/* /var/www/html/
  - Enable port :80 of your instance

- Backend
  - allowed ec2 instance public IP on mongodb server
  - Enable port :7777 of your instance
  - npm install pm2 -g
  - pm2 start npm -- start (or) to change the custom name
   pm2 start npm -- name "devTinder-Backend" -- start
  - pm2 logs
  - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
  - pm2 start npm --name "devTinder-backend" -- start
  - config nginx - sudo nano /etc/nginx/sites-available/default
  - restart nginx : sudo systemctl restart nginx
  - Modify the BASEURL in frontend project to /api

  # nginx config :
          
    server_name 13.50.236.219;

     location /api/ {
        proxy_pass http://localhost:7777/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

  # Adding a custom Domain name 

    - purchased domain name from godaddy/namescheap
    - signup on cloudflare & add a new domain name
    - change nameservers on godaddy/namescheap  and point it to cloudflare 
    - wait for sometime till your nameservers are updated 
    - DNS record: A devmatchh.me 13.50.236.219
    - Enable SSL for website

  # Sending Emails via SES

    - Create a IAM user
    - Give Access to AmazonSESFullAccess
    - Amazon SES : Create an Identity
    - Verify your domain name
    - Verify an email address identity
    - Install AWS SDK -v3 
    - Code Example https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/ses#code-examples 
    - Setup SESClient
    - Access Credentials should be created in iAM under SecurityCredentials Tab
    - Add the credentials to the env fileo
    - Write code for SESClient
    - Write code for Sending email address
    - Make the email dynamic by passing more params to the run function

  # Scheduling crons jobs in NodeJs
    - Installing node-cron
    - Learning about cron expression syntax - crontab.guru
    - Schedule a job
    - date-fns
    - Find all the unique email Id who have got connection Request in previous day
    - Send Email
    - Explore queue mechanism to send bulk emails
    - Amazon SES Bulk Emails
    - Make sendEmail function dynamic
    - bee-queue & bull npm packages 

  # Razorpay Payment Gateway Integration
    - Sign up on Razorpay & complete KYC
    - Created a Ui for premium page 
    - Creating an API for create order in backend
    - added my key and secret in env file
    - Initalized Razorpay in utils
    - creating order on Razorpay
    - created Schema and model
    - saved the order in payments collection
    - make the API dynamic
    - Setup Razorpay webhook on your live API
    - Ref - https://github.com/razorpay/razorpay-node/tree/master/documents
    - Ref - https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps/#integrate-with-razorpay-payment-gateway
    - Ref - https://razorpay.com/docs/webhooks/validate-test/
    - Ref - https://razorpay.com/docs/webhooks/payloads/payments/