import connect from "./src/DataBase/mongo.mjs";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Express from "express";
import { createUSer, getAllUser } from "./src/controllers/controller.js";

dotenv.config();

connect();

const server = Express();
server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
  return res.status(200).json({ message: "app working!" });
});

server.post("/signUp", createUSer);
server.get("/users", getAllUser);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
