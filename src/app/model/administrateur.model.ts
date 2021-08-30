import { Voituresociete } from './voituresociete.model';
import { Collaborateur } from './collaborateur.model';
export class Administrateur extends Collaborateur{
  vehicule: Voituresociete[];
}
