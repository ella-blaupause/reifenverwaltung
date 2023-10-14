"use client"

import Link from "next/link";
import Heading from "../../../components/Heading/Heading"
import { BiUndo } from "react-icons/bi";
import ProductForm from "../../../components/ProductForm/ProductForm";
import { useSession } from "next-auth/react";


export default function AddProduct(){
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
    

    return(
        <>
            <Heading />
            <Link href={"/admin"}><BiUndo size={24} /></Link>
            <ProductForm />
        </>
    )
}