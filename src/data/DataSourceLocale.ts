import { AbstractDataSource } from "./DataSourceAbstrait";
import { Produit } from "./entite";
export class LocalDataSource extends AbstractDataSource {
        loadProduits(): Promise<Produit[]> {
            return Promise.resolve([
                { id: 1, nom: "P1", categorie: "Watersports",
                    description: "P1 (Watersports)", prix: 3 },
                { id: 2, nom: "P2", categorie: "Watersports",
                    description: "P2 (Watersports)", prix: 4 },
                { id: 3, nom: "P3", categorie: "Running",
                    description: "P3 (Running)", prix: 5 },
                { id: 4, nom: "P4", categorie: "Chess",
                    description: "P4 (Chess)", prix: 6 },
                { id: 5, nom: "P5", categorie: "Chess",
                    description: "P6 (Chess)", prix: 7 },
            ]);
        }
        storeCommande(): Promise<number> {
            console.log("Store commande");
            console.log(JSON.stringify(this.Commande));
            return Promise.resolve(1);
        }
}