import { Administrateur } from "./administrateur.model";
export class Voituresociete {
  immatriculation: string;
  marque: string;
  modele: string;
  categorie: string;
  imgUrl: string;
  status: string;
  responsable: Administrateur;
}
