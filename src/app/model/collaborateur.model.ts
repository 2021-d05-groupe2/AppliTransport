import { Voitureprive } from './voitureprive.model';
import { Covoiturage } from './covoiturage.model';
import { User } from './user.model';
export class Collaborateur extends User{
  covoiturage: Covoiturage[];
  organisedtravel:Covoiturage[];
  vehiculeperso: Voitureprive;
}
