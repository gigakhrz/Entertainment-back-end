import connect from "./src/DataBase/mongo.mjs";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Express from "express";
import {
  createUser,
  getUser,
  getEntertainment,
  postEntertainment,
  validateUser,
  changeBookmark,
} from "./src/controllers/controller.js";

dotenv.config();

connect();

const server = Express();
server.use(cors());
server.use(bodyParser.json());

server.get("/", (req, res) => {
  return res.status(200).json({ message: "app working!" });
});

server.post("/signUp", createUser);
server.get("/user", getUser);
server.post("/validate", validateUser);
server.post("/postData", postEntertainment);
server.get("/getEntertainment", getEntertainment);
server.put("/updateBookmarked", changeBookmark);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
