import { db } from "../infra/db";
import type { PharmaceType, PharmaceUpdateType } from "../types/types";

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

        const listLength = Number(listValue.length);

        for (let i = 0; i < listLength; i++) {
            if (listValue[i] != "" && listValue[i]) {
                if (typeof listValue[i] == "number") query = query + `${listString[i]} = ${listValue[i]} ,`;
                else query = query + `${listString[i]} = '${listValue[i]}' ,`;
            }
        }

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
}
