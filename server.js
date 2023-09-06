import connect from "./src/DataBase/mongo.mjs";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Express from "express";

dotenv.config();

connect();

const server = Express();
server.use(cors());
server.use(bodyParser.json());

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
