import Link from "next/link";
import Heading from "../../../components/Heading/Heading";
import { FiPlusCircle } from "react-icons/fi";
import ProductListAdmin from "../../../components/ProductListAdmin/ProductListAdmin";

export default function Admin(){
    return (
    <>
        <Heading />
        <Link href={"/addProduct"}><FiPlusCircle /></Link>
        <ProductListAdmin />
        <Link href={"/dashboard"}>Zurück zum Kundenbereich</Link>
    </>)
}