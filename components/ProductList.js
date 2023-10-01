import { products } from "../data/products";

export default function ProductList(){
    return(
        <>
            {products.map((product)=>(
                <p key={product.id}>{product.Name}</p>
            ))}
        </>

    );
}