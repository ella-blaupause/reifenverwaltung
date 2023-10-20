//import { products } from "../../data/products";
"use client";

import useSWR from "swr";
import styles from "./ProductList.module.css"
import Image from 'next/image'

const fetcher = (...args) => fetch(...args).then(res => res.json());
   

export default function ProductList(){
    const { data, error, isLoading } = useSWR('/api/products', fetcher)
  
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    console.log(data.products);
    const products= data.products;
    return(
        <ul className={styles.list}>
            {products.map((product)=>(
                <div key={product._id} className={styles.productCard}>
                    <Image src={product.Bild} 
                        alt=""  
                        width={120} 
                        height={120}
                        priority/>
                    
                    <div>
                     <li><h2 className={styles.productName}>{product.Name}</h2></li>
                      <li>Größe: {product.Größe}</li>
                      <li>Saison: {product.Saison}</li>
                    </div>
                </div>
            ))}
        </ul>

    );
}