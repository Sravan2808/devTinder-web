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
