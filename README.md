# Websocket task template
> Static http server and base task packages. 
> By default WebSocket client tries to connect to the 8080 port.
> Client server starts on 8181 port

If you want to change ports numbers please creat .env file and add ports numbers as it done in the .env.example.

The app only works with English keyboard layout and prints screen can be done only on the main screen.
If you will be out of allowed values of mouse position for print screen, the position will be set to {0;0}  by default.

## Installation
1. Clone/download repo
2. `npm install`

## Usage


**Development**

`npm run start:dev`

* App served @ `http://localhost:8181` with nodemon

**Production**

`npm run start`

* App served @ `http://localhost:8181` without nodemon

---

**All commands**

Command | Description
--- | ---
`npm run start:dev` | App served @ `http://localhost:8181` with nodemon
`npm run start` | App served @ `http://localhost:8181` without nodemon

**Note**: replace `npm` with `yarn` in `package.json` if you use yarn.
