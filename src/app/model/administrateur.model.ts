import { Voituresociete } from './voituresociete.model';
import { Collaborateur } from './collaborateur.model';
import { Covoiturage } from './covoiturage.model';
export class Administrateur extends Collaborateur{
  id: number;
  name: string;
  firstname: string;
  mail: string;
  password: string;
  tel: string;
  imgURL: string;
  covoiturages: Covoiturage[];
  annonces:Covoiturage[];
  vehicules: Voituresociete[];
}
