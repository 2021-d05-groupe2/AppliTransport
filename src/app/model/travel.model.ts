import { Collaborateur } from "./collaborateur.model";

export abstract class Travel {
    id: number;
    organisateur: Collaborateur;
    adresseDepart: String;
    adresseDestination: String;
    date: Date;
    duree: number;
    status: String;

    constructor(){

    }
}