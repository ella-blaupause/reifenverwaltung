import Link from "next/link";
import Heading from "../../../components/Heading/Heading";

export default function Admin(){
    return (
    <>
        <Heading />
        <h2>Das ist eine Admin-Seite!</h2>
        <Link href={"/dashboard"}>Zurück zur Produktseite</Link>
    </>)
}