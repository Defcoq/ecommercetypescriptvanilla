export type Produit = {
    id: number,
    nom: string,
    description: string,
    categorie: string,
    prix: number
};
export class DetailCommande {
    constructor(public Produit: Produit, public quantite: number) {
        // no statements required
    }
    get total(): number {
        return this.Produit.prix * this.quantite;
    }
}
export class Commande {
    private lines = new Map<number, DetailCommande>();
    constructor(initialLines?: DetailCommande[]) {
        if (initialLines) {
            initialLines.forEach(ol => this.lines.set(ol.Produit.id, ol));
        }
    }
    public addProduit(prod: Produit, quantite: number) {
        if (this.lines.has(prod.id)) {
            if (quantite === 0) {
                this.removeProduit(prod.id);
            } else {
                this.lines.get(prod.id)!.quantite += quantite;
            }
        } else {
            this.lines.set(prod.id, new DetailCommande(prod, quantite));
        }
    }
    public removeProduit(id: number) {
        this.lines.delete(id);
    }
    get DetailCommandes(): DetailCommande[] {
        return [...this.lines.values()];
    }
    get ProduitCount(): number {
        return [...this.lines.values()]
            .reduce((total, ol) => total += ol.quantite, 0);
    }
    get total(): number {
        return [...this.lines.values()].reduce((total, ol) => total += ol.total, 0);
    }
}