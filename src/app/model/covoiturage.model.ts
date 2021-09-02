import { Collaborateur } from "./collaborateur.model";
import { Travel } from "./travel.model";
import { Voitureprive } from "./voitureprive.model";

export class Covoiturage extends Travel{
  passagers: Collaborateur[];
  nbPassagers: number;
  vehicule: Voitureprive;

  constructor(organisateur: Collaborateur,
    id: number,
    adresseDepart: String,
    adresseDestination: String,
    date: Date,
    duree: number,
    vehicule: Voitureprive)
  {
      super();
      super.id = id;
      super.adresseDepart = adresseDepart;
      super.adresseDestination = adresseDestination;
      super.date = date;
      super.duree = duree;
      super.organisateur = organisateur;
      this.vehicule = vehicule;
  }
}
