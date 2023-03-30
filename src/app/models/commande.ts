
import { Client } from "./client";
import { Produit } from "./produit";
import { Utilisateur } from "./utilisateur";

export class Commande {

    id: number | undefined;
    nom: string | undefined;
    quantite: string | undefined;
    description: string | undefined;
    date: string | undefined;
    status: boolean | undefined;
    id_utilisateur: number | undefined;
    id_produit: number | undefined;
    id_client: number | undefined;
    prix: string | undefined;
    produit: Produit | undefined;
    client: Client | undefined;
    utilisateur: Utilisateur | undefined;
    
}