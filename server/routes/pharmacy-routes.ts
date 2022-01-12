import { Router } from "express";
import { ControllerRoutes } from "../controller/controller-routes";

export const router = Router();
const controller = new ControllerRoutes();

router.post("/cadasterpharmace", controller.postPharmaceRouter);