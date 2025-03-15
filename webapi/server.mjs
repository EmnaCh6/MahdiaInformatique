import http from "node:http" //module interne sans installation 
import app from "./app.mjs"

const server = http.createServer(app);

server.listen(3000)
