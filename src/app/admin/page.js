"use client"


import Link from "next/link";
import Heading from "../../../components/Heading/Heading";
import { FiPlusCircle } from "react-icons/fi";
import ProductListAdmin from "../../../components/ProductListAdmin/ProductListAdmin";
import { useSession } from "next-auth/react";
import styles from "./admin.module.css"

export default function Admin(){
    const { data: session } = useSession(); 

    if(!session) {
        return(
          <>
            <Heading />
            <Link href={"/login"}>
                Bitte einlogen <span>Login</span>
            </Link>
          </>
        )
      } else if( session.user.role !== "admin"){
        return (
            <>
              <Heading />
              <h3>Du bist kein Admin!</h3>
              <Link href={"/dashboard"}>Zurück zum Kundenbereich </Link>
            </>
        )
    }

    return (
    <>
        <Heading />
        <Link href={"/addProduct"} className={styles.addProductLink}><span> Reifen hinzufügen </span><FiPlusCircle /></Link>
        <ProductListAdmin />
        <Link href={"/dashboard"} className={styles.backLink}>Zurück zum Kundenbereich</Link>
    </>)
}