"use client"

import EditProductForm from "../../../../components/EditProductForm/EditProductForm";
import Heading from "../../../../components/Heading/Heading";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { BiUndo } from "react-icons/bi";

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function EditProduct({ params }) {
  const { id } = params;
  const { data, isLoading } = useSWR(id ? `/api/products/${id}` : null, fetcher);
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

  if (!data) return;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const product = data.product;
  const {Name, Bild, Größe, Saison} = product;
  

  return (
    <>
      <Heading />
      <Link href={"/admin"}><BiUndo size={24} /></Link>
      <EditProductForm id={id} Name={Name} Bild={Bild} Größe={Größe} Saison={Saison}  />
    </>
  )
}

