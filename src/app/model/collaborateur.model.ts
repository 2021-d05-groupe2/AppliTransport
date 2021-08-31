import { Voitureprive } from './voitureprive.model';
import { Covoiturage } from './covoiturage.model';
import { User } from './user.model';
export class Collaborateur extends User{
  id: number;
  name: string;
  firstname: string;
  mail: string;
  password: string;
  tel: string;
  imgURL: string;
  covoiturages: Covoiturage[];
  annonces:Covoiturage[];
}
