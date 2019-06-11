import * as express from "express";
import {pingController} from "./controllers/ping";
import {db} from './config/db';
const app = express();

app.use(pingController);

db;

export default app;
