import { Services } from "../service/routes-services";
import type { Request, Response } from "express";

const services = new Services();
export class ControllerRoutes {
    public postPharmaceRouter = async (req: Request, res: Response) => {
        try {
            const response = await services.postPharmace({
                logo: req.body.logo,
                name: req.body.name,
                cnpj: req.body.cnpj,
                adress: req.body.adress,
                operationHours: req.body.operationHours,
                responsible: req.body.responsible,
                celular: req.body.celular,
                others: req.body.others,
            });
            res.json(response);
        } catch (err) {
            res.json(err);
        }



    };
}