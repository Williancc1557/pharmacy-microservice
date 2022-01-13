import * as request from "supertest";
import { app } from "../app";

describe("cadasterpharmace router", () => {
    it("Should return rowcount 1", async () => {
        const req = await request(app).post("/cadasterpharmace").send(
            {
                "logo": "icon.png",
                "name": "will pharmacea",
                "cnpj": 123123123123,
                "adress": "161",
                "operationHours": "16:00 15:00",
                "responsible": "willian cavalcanti coelho",
                "celular": 81989474662,
                "others": "Olá, essa é a famácia dos seus sonhos, aqui tem de tudo!",
            }
        );
        await request(app).post("/deletepharmace").send({
            name: "will pharmaceasdasd",
        });
        console.log(req.body);
        expect(req.body).toBe(1);
    });
});