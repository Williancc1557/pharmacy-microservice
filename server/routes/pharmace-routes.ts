import { Router } from "express";
import { ControllerRoutes } from "../controller/controller-routes";

export const router = Router();

const controller = new ControllerRoutes();

router.post("/cadasterpharmace", controller.postPharmaceRouter);

router.post("/updatepharmace", controller.postUpdatePharmaceRouter);

router.post("/deletepharmace", controller.postDeletePharmace);

router.get("/listpharmaces", controller.getListPharmaces);

router.get("/getpharmace/:name", controller.getPharmaceByName);

