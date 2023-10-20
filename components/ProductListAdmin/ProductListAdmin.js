"use client";

import useSWR from "swr";
import styles from "./ProductListAdmin.module.css"
import Image from 'next/image'
import { FiEdit } from "react-icons/fi";
import Link from "next/link";
import DeleteButton from "../DeleteButton/DeleteButton";


const fetcher = (...args) => fetch(...args).then(res => res.json());
   

export default function ProductListAdmin(){
    const { data, error, isLoading } = useSWR('/api/products', fetcher)
  
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

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
                    
                    <div className={styles.productDescrption}>
                      <li><h2 className={styles.productName}>{product.Name}</h2></li>
                      <li>Größe: {product.Größe}</li>
                      <li>Saison: {product.Saison}</li>
                    </div>

                    <div className={styles.editAndDelete}>
                      <Link href={`/editProduct/${product._id}`} className={styles.editLink}><FiEdit size={24}/></Link>
                      <DeleteButton id={product._id}/>
                    </div>
                
                </div>
            ))}
        </ul>

    );
}