import { createElement } from "./tools/jsxFactory";
import { Produit, Commande } from "./data/entite";
import { AbstractDataSource } from "./data/DataSourceAbstrait";
import { ProduitList } from "./ProductList";
export class HtmlDisplay {
    private containerElem: HTMLElement;
    private selectedCategory: string;
    constructor() {
        this.containerElem = document.createElement("div");
    }
    props: {
        dataSource: AbstractDataSource;
    }
    async getContent(): Promise<HTMLElement> {
        await this.updateContent();
        return this.containerElem;
    }
    async updateContent() {
        let Produits = await this.props.dataSource.getProduits("id",
            this.selectedCategory);
        let categories = await this.props.dataSource.getCategories();
        this.containerElem.innerHTML = "";
        let content = <div>
            <ProduitList Produits={ Produits } categories={ categories }
                selectedCategory={ this.selectedCategory }
                addToOrderCallback={ this.addToCommande }
                filterCallback={ this.selectCategory} />
        </div>
        this.containerElem.appendChild(content);
    }
    addToCommande = (Produit: Produit, quantity: number) => {
        this.props.dataSource.Commande.addProduit(Produit, quantity);
        this.updateContent();
    }
    selectCategory = (selected: string) => {
        this.selectedCategory = selected === "All" ? undefined : selected;
        this.updateContent();
    }
}