import { db } from "../infra/db";
import type { PharmaceType } from "../types/types";

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
}