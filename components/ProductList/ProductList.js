import { products } from "../../data/products";
import styles from "./ProductList.module.css"
import Image from 'next/image'



export default function ProductList(){

    return(
        <ul className={styles.list}>
            {products.map((product)=>(
                <div key={product.id} className={styles.productCard}>
                    <Image src={product.Bild} 
                        alt=""  
                        width={100} 
                        height={100}/>
                    <li>{product.Name}</li>
                    <li>{product.Größe}</li>
                    <li>{product.Saison}</li>
                </div>
            ))}
        </ul>

    );
}