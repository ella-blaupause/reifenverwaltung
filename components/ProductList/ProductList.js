import { Fragment } from "react";
import { products } from "../../data/products";
import "./ProductList.css"


export default function ProductList(){
    return(
        <ul className="ul-style">
            {products.map((product)=>(
                <Fragment key={product.id}>
                    <li >{product.Name}</li>
                    <li >{product.Größe}</li>
                </Fragment>
            ))}
        </ul>

    );
}