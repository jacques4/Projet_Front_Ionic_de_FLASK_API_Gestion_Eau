import { TypeClient } from "./typeclient";
import { Utilisateur } from "./utilisateur";


export class Client
{
  id: number | undefined ;
  nom: string | undefined ;
  prenom: string | undefined;
  email: string | undefined ;
  tel: string | undefined ;
  adresse: string | undefined;
  nif: string | undefined;
  numrccm: string | undefined;
  denomination: string | undefined;
  lat: number | undefined;
  longi: number | undefined
  profession: string | undefined;
  typeclient: TypeClient | undefined;
  id_typeclient: number | undefined;
  utilisateur: Utilisateur | undefined;
  id_utilisateur: number | undefined;
}