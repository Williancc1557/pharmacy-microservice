import * as express from "express";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import { corsConfig } from "./middlewares/middlewares-app";
import { router } from "./routes/pharmace-routes";

export const app = express();

app.use(bodyParser.json());
app.use(logger("dev"));
app.use(corsConfig);
app.use("", router);