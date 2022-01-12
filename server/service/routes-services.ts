import { PharmacesData } from "../data/querys";
import type { PharmaceType } from "../types/types";

export class Services {
    public postPharmace = async ({
        logo,
        name,
        cnpj,
        adress,
        operationHours,
        responsible,
        celular,
        others,
    }: PharmaceType) => {
        new PharmacesData().pharmaceCadaster({ logo, name, cnpj, adress, operationHours, responsible, celular, others });
    };
}