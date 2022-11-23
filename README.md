# task-restaurant-app
 Pipedreams code challenge.  
 This API has been deployed in render.com: https://restaurant-api-sf47.onrender.com  

## Available Scripts
With terminal in the server project directory(/server), you can run:

Dev mode: `npm run dev`
Open [http://localhost:4500](http://localhost:4500) to view it in the browser.

For production mode: `npm start`

Run the test cases: `npm run test`


## Helpful extensions in VS code
- MongoDB for VS Code: Handle local, OnPremises and Atlas Mongo databases
- Thunder Client: Test endopoints
- Live Server: Run and debug


## Setup local environment
1. Install mongodb or use Mongodb Atlas
2. In server directory run: npm install, to load dependencies
3. In server directory run: npm run dev, to start server (it uses nodemon to hot reload of changes)


## Variables
- .env file: here you will find the port where the app runs
- utils/mongoose.js: Connection String

## Repository
https://github.com/trigger07/task-restaurant-app 

## Deployment
Database: Mongodb Atlas   
Api: https://restaurant-api-sf47.onrender.com  
Endpoints: GetWaiters, GetCooks
Front-end: Retool.com