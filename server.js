const { Server } = require("got-tls");
Server.connect();
// Importing express
const express = require("express");
// Importing cors
var cors = require("cors");
// Initializing Express
const app = express();
const ip = require("./ip");
app.use(cors());

// Use the port available else use Port 3000
const port = process.env.PORT || 3000;

// Middleware to rocignize incoming request objects as JSON object
app.use(express.json());

// Set the ip-address of your trusted reverse proxy server such as
// haproxy or Apache mod proxy or nginx configured as proxy or others.
// The proxy server should insert the ip address of the remote client
// through request header 'X-Forwarded-For' as
// 'X-Forwarded-For: some.client.ip.address'
// Insertion of the forward header is an option on most proxy software
app.set("trust proxy", true);
app.use("/ip", ip);

// App main route
app.get("/", (req, res) => res.send("Welcome to BSG Worker Express Backend!"));
// Binds the app and listens to the connection on the port specified
app.listen(port, () => console.log(`App listening on port ${port}!`));
