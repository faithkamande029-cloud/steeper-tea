const jsonServer = require("json-server");
const express = require("express");

const server = jsonServer.create();
const router = jsonServer.router("db.json");

const middlewares = jsonServer.defaults({
    bodyParser: false
});

server.use(middlewares);

// Allow JSON request upto 2 MB
server.use(express.json({ limit: "2mb" }));

server.use(router);

server.listen(3001, () => {
    console.log("JSON Server running at http://localhost:3001");
});

