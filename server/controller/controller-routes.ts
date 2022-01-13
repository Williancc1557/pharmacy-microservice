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

    public postUpdatePharmaceRouter = async (req: Request, res: Response) => {

        const response = await services.postUpdatePharmace({
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

    };

    public postDeletePharmace = async (req: Request, res: Response) => {
        const response = await services.deletePharmaceByName({
            name: req.body.name,
            cnpj: req.body.cnpj,
        });

        res.json(response);
    };

    public getListPharmaces = async (req: Request, res: Response) => res.json(await services.listPharmaces());

    public getPharmaceByName = async (req: Request, res: Response) => res.json(await services.getPharmaceByName(req.params.name));
}