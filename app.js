import * as dotenv from "dotenv";
dotenv.config();
import { ServerJS } from "./models/server.js";

const server = new ServerJS();

server.listen();
