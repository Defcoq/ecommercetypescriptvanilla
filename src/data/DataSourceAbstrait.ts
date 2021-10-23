import { Produit, Commande } from "./entite";
export type ProduitProp = keyof Produit;
export abstract class AbstractDataSource {
    private _Produits: Produit[];
    private _categories: Set<string>;
    public Commande: Commande;
    public loading: Promise<void>;
    constructor() {
        this._Produits = [];
        this._categories = new Set<string>();
        this.Commande = new Commande();
        this.loading = this.getData();
    }
    async getProduits(sortProp: ProduitProp = "id",
            categorie? : string): Promise<Produit[]> {
        await this.loading;
        return this.selectProduits(this._Produits, sortProp, categorie);
    }
    protected async getData(): Promise<void> {
        this._Produits = [];
        this._categories.clear();
        const rawData = await this.loadProduits();
        rawData.forEach(p => {
            this._Produits.push(p);
            this._categories.add(p.categorie);
        });
    }
    protected selectProduits(prods: Produit[],
            sortProp: ProduitProp, categorie?: string): Produit[] {
        return prods.filter(p=> categorie === undefined || p.categorie === categorie)
                .sort((p1, p2) => p1[sortProp] < p2[sortProp]
                    ? -1 : p1[sortProp] > p2[sortProp] ? 1: 0);
    }
    async getCategories(): Promise<string[]> {
        await this.loading;
        return [...this._categories.values()];
    }
    protected abstract loadProduits(): Promise<Produit[]>;
    abstract storeCommande(): Promise<number>;
}