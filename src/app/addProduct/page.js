"use client"

import Link from "next/link";
import Heading from "../../../components/Heading/Heading"
import { BiUndo } from "react-icons/bi";
import ProductForm from "../../../components/ProductForm/ProductForm";

export default function addProduct(){
    return(
        <>
            <Heading />
            <Link href={"/admin"}><BiUndo size={24} /></Link>
            <ProductForm />
        </>
    )
}