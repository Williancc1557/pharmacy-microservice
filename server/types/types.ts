export interface PharmaceType {
    logo?: string;
    name: string;
    cnpj: number;
    adress: string;
    operationHours: string;
    responsible: string;
    celular: number;
    others: string;
}

export interface PharmaceUpdateType {
    logo?: string;
    name?: string;
    cnpj?: number;
    adress?: string;
    operationHours?: string;
    responsible?: string;
    celular?: number;
    others?: string;
}

export interface PharmaceDeleteType {
    name?: string;
    cnpj?: number;
}