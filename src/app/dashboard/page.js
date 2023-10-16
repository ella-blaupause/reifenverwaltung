"use client"

import Link from "next/link";
import Heading from "../../../components/Heading/Heading"
import ProductList from "../../../components/ProductList/ProductList" 
import UserInfo from "../../../components/UserInfo/UserInfo"
import { useSession } from "next-auth/react";
import { GrUserAdmin } from "react-icons/gr";


export default function Dashboard() {
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
  }
  
  return (
    <main>
      <Heading />
      <UserInfo />
      {session.user.role === "admin" &&
       <Link href={"/admin"}> <GrUserAdmin /></Link>}
      <ProductList />
    </main>
  )
}
