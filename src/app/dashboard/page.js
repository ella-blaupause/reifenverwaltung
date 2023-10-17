"use client"

import Link from "next/link";
import Heading from "../../../components/Heading/Heading"
import ProductList from "../../../components/ProductList/ProductList" 
import UserInfo from "../../../components/UserInfo/UserInfo"
import { useSession } from "next-auth/react";
import { FaUserCog } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import styles from "./dashboard.module.css"


export default function Dashboard() {
  const { data: session } = useSession(); 
  

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
    <main>
      <Heading />
      <div className={styles.userAdminDiv}>
      <UserInfo />
      {session.user.role === "admin" &&
       <Link href={"/admin"} className={styles.adminLink}> <FaUserCog /></Link>}
      </div>
      <ProductList />
    </main>
  )
}
