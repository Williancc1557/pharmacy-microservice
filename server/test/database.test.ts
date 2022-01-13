import { PharmacesData } from "../data/querys";

const querys = new PharmacesData();

describe("Should connect database", () => {
    it("Connect Sucefull", async () => {
        await querys.listPharmaces();
    });
});