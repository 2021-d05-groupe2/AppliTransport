import { Voituresociete } from "./voituresociete.model";
import { Collaborateur } from "./collaborateur.model";
import { Travel } from "./travel.model";

export class Reservationvoiture extends Travel{
  vehicule: Voituresociete;

  constructor(organisateur: Collaborateur,
    id: number,
    adresseDepart: String,
    adresseDestination: String,
    date: Date,
    duree: number,
    vehicule: Voituresociete)
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
