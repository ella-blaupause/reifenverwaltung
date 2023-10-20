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
  console.log(saison)
 
  return (
    <main>
      <Heading />
      <div className={styles.userAdminDiv}>
      <UserInfo />
      {session.user.role === "admin" &&
       <Link href={"/admin"} className={styles.adminLink}> <FaUserCog /></Link>}
      </div>
  
      <>
       <button type="button" onClick={()=> setSaison("Sommer")}>Sommer</button>
       <button type="button" onClick={()=> setSaison("Winter")}>Winter</button> 
       <button type="button" onClick={()=> setSaison("Ganzjahr")}>Ganzjahr</button>
       <button type="button" onClick={()=> setSaison("alle")}>Alle</button>
       <ProductList saison={saison} />
      </>

      
    </main>
  )
}
