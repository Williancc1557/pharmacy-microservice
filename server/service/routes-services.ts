import { PharmacesData } from "../data/querys";
import type { PharmaceType, PharmaceUpdateType } from "../types/types";

const data = new PharmacesData();

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
        const getPharmace = await data.getPharmaceByName(name);
        const maxFiliars = 4;

        if (getPharmace.rowCount == maxFiliars) return { value: false, error: "Afiliate limit exceeded" };
        return data.pharmaceCadaster({ logo, name, cnpj, adress, operationHours, responsible, celular, others });
    };

    public postUpdateProfile = async ({
        logo,
        name,
        cnpj,
        adress,
        operationHours,
        responsible,
        celular,
        others,
    }: PharmaceUpdateType) => data.updatePharmace({
        logo,
        name,
        cnpj,
        adress,
        operationHours,
        responsible,
        celular,
        others,
    });
}