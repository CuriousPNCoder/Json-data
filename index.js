import jsonServer from "json-server";

const jsonServer = require("json-server")
const server = jsonServer.create();
const router = jsonServer.router("categories.json")
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port);