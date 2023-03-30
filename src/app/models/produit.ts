import { Marque } from "./marque";
import { Utilisateur } from "./utilisateur";

export class Produit {

    id: number | undefined;
    quantite: string | undefined;
    prix: string | undefined;
    id_marque:number | undefined;
    marque:Marque | undefined;
    description: string | undefined;
    date: string | undefined;
    id_utilisateur: number | undefined;
    utilisateur: Utilisateur | undefined;
}