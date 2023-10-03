//import { products } from "../../data/products";
"use client";

import useSWR from "swr";
import styles from "./ProductList.module.css"
import Image from 'next/image'
import { products } from "../../data/products";

const fetcher = (...args) => fetch(...args).then(res => res.json());
   

export default function ProductList(){
    const { data, error, isLoading } = useSWR('/api/products', fetcher)
  
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    console.log(data);
    return(
        <ul className={styles.list}>
            {products.map((product)=>(
                <div key={product.id} className={styles.productCard}>
                    <Image src={product.Bild} 
                        alt=""  
                        width={100} 
                        height={100}/>
                    <div>
                     <li>{product.Name}</li>
                      <li>Größe: {product.Größe}</li>
                      <li>Saison: {product.Saison}</li>
                    </div>
                </div>
            ))}
        </ul>

    );
}