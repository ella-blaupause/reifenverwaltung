"use client"

import Link from "next/link";
import Heading from "../../../components/Heading/Heading"
import ProductList from "../../../components/ProductList/ProductList" 
import UserInfo from "../../../components/UserInfo/UserInfo"
import { useSession } from "next-auth/react";
import { FaUserCog } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import styles from "./dashboard.module.css"
import { useState } from "react";


export default function Dashboard() {
  const { data: session } = useSession(); 
  const [saison, setSaison]= useState("alle")
  

  if(!session) {
    return(
      <>
        <Heading />
        <Link href={"/login"}>
            Bitte einlogen <span><FiLogIn /></span>
        </Link>
      </>
    )
  }
  
 
  return (
    <>
    <Heading />
    <main>
      <div className={styles.userAdminDiv}>
      <UserInfo />
      {session.user.role === "admin" &&
       <Link href={"/admin"} className={styles.adminLink}> <FaUserCog /></Link>
      }
      </div>
  
      <>
       <div className={styles.saisonButtons}>
        <button type="button" className={`${saison === "Sommer" && styles.active}`} onClick={()=> setSaison("Sommer")}>Sommer</button>
        <button type="button" className={`${saison === "Winter" && styles.active}`} onClick={()=> setSaison("Winter")}>Winter</button> 
        <button type="button" className={`${saison === "Ganzjahr" && styles.active}`} onClick={()=> setSaison("Ganzjahr")}>Ganzjahr</button>
        <button type="button" className={`${saison === "alle" && styles.active}`} onClick={()=> setSaison("alle")}>Alle</button>
       </div>
       <ProductList saison={saison} />
      </>
    </main>
    </>
  )
}
