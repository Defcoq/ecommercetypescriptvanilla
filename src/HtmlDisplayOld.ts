/*import { Produit, Commande } from "./data/entite";
export class DomDisplay {
    props: {
        Produits: Produit[],
        Commande: Commande
    }
    getContent(): HTMLElement {
        let elem = document.createElement("h3");
        elem.innerText = this.getElementText();
        elem.classList.add("bg-primary", "text-center", "text-white", "p-2");
        return elem;
    }
    getElementText() {
        return `${this.props.Produits.length} Produits, `
            + `Commande total: $${ this.props.Commande.total }`;
    }
}*/