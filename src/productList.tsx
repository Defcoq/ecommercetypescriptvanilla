import { createElement } from "./tools/jsxFactory";
import { Produit } from "./data/entite";
import { ProduitItem } from "./ProductItem";
import { CategoryList } from "./categoryList";
export class ProduitList {
    props: {
        Produits: Produit[],categories: string[],
        selectedCategory: string,
        addToOrderCallback?: (Produit: Produit, quantity: number) => void,
        filterCallback?: (category: string) => void;
    }
    getContent(): HTMLElement {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryList categories={ this.props.categories }
                        selectedCategory={ this.props.selectedCategory }
                        callback={ this.props.filterCallback } />
                </div>
                <div className="col-9 p-2">
                    {
                        this.props.Produits.map(p =>
                            <ProduitItem Produit={ p }
                                callback={ this.props.addToOrderCallback } />)
                    }
                </div>
            </div>
        </div>
    }
}