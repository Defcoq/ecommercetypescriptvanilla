import { createElement } from "./tools/jsxFactory";
import { Produit } from "./data/entite";
export class ProduitItem {
    private quantity: number = 1;
    props: {
        Produit: Produit,
        callback: (Produit: Produit, quantity: number) => void
    }
    getContent(): HTMLElement {
        return <div classnom="card m-1 p-1 bg-light">
            <h4>
                { this.props.Produit.nom }
                <span classnom="badge badge-pill badge-primary float-right">
                    ${ this.props.Produit.prix.toFixed(2) }
                </span>
            </h4>
            <div classnom="card-text bg-white p-1">
                { this.props.Produit.description }
                <button classnom="btn btn-success btn-sm float-right"
                        onclick={ this.handleAddToCart } >
                    Add To Cart
                </button> <select classnom="form-control-inline float-right m-1"
                        onchange={ this.handleQuantityChange }>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
        </div>
    }
    handleQuantityChange = (ev: Event): void => {
        this.quantity = Number((ev.target as HTMLSelectElement).value);
    }
    handleAddToCart = (): void => {
        this.props.callback(this.props.Produit, this.quantity);
    }
}