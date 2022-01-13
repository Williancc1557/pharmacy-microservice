import { db } from "../infra/db";
import type { PharmaceType, PharmaceUpdateType, PharmaceDeleteType } from "../types/types";

export class PharmacesData {
    public pharmaceCadaster = async ({
        logo,
        name,
        cnpj,
        adress,
        operationHours,
        responsible,
        celular,
        others }: PharmaceType) => db.query(`INSERT INTO pharmaces (logo, name, cnpj, adress, operation_hours, responsible, celular, others) VALUES ('${logo}', '${name}', ${cnpj}, '${adress}', '${operationHours}', '${responsible}', ${celular}, '${others}')`);

    public getPharmaceByName = async (name: string) => db.query(`SELECT * FROM pharmaces WHERE name = '${name}'`);

    public updatePharmace = async ({
        logo,
        name,
        cnpj,
        adress,
        operationHours,
        responsible,
        celular,
        others }: PharmaceUpdateType) => {
        const listValue = [logo, name, cnpj, adress, operationHours, responsible, celular, others];
        const listString = ["logo", "name", "cnpj", "adress", "operation_hours", "responsible", "celular", "others"];
        let query = "UPDATE pharmaces SET ";

        const logArrayElements = (element: number | string | undefined, index: number) => {
            if (element != "" && element) {
                if (typeof element == "number") query = query + `${listString[index]} = ${element} ,`;
                else query = query + `${listString[index]} = '${element}' ,`;
            }
        };

        listValue.forEach(logArrayElements);

        query = query + `WHERE name = '${name}'`;
        query = query.replace(/([,])+(WHERE)/, "$2");

        try {
            return db.query(query);
        } catch (err) {
            return {
                value: false,
                error: err,
            };
        }
    };

    public deletePharmace = async ({
        name,
        cnpj,
    }: PharmaceDeleteType) => {
        let query = `DELETE FROM pharmaces WHERE name = '${name}'`;

        if (cnpj) {
            query = query + ` AND cnpj = ${cnpj}`;
        }
        try {
            return db.query(query);
        } catch (err) {
            return {
                value: false,
                error: err,
            };
        }
    };

    public listPharmaces = async () => db.query("SELECT * FROM pharmaces");

    public getPharmaceById = async (id: number) => db.query(`SELECT * FROM pharmaces WHERE id = '${id}'`);
}