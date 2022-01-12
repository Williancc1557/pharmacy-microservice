import * as cors from "cors";
import { app } from "../app";
import type { NextFunction, Request, Response } from "express";

export const corsConfig = (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
};