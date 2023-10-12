//import { products } from "../../data/products";
"use client";

import useSWR from "swr";
import styles from "./ProductListAdmin.module.css"
import Image from 'next/image'
import { products } from "../../data/products";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";


const fetcher = (...args) => fetch(...args).then(res => res.json());
   

export default function ProductListAdmin(){
    const { data, error, isLoading } = useSWR('/api/products', fetcher)
  
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    console.log(data.products);
    const products= data.products;
    return(
        <ul className={styles.list}>
            {products.map((product)=>(
                <div key={product.id} className={styles.productCard}>
                    <Image src={product.Bild} 
                        alt=""  
                        width={100} 
                        height={100}
                        priority/>
                    
                    <div>
                      <li>{product.Name}</li>
                      <li>Größe: {product.Größe}</li>
                      <li>Saison: {product.Saison}</li>
                      <li><FiEdit /></li>
                      <li><FiTrash2 /></li>
                    </div>
                </div>
            ))}
        </ul>

    );
}