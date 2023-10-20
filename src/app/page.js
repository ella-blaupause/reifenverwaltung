'use client'

import Heading from "../../components/Heading/Heading"
import styles from "./page.module.css"
import Link from "next/link"
import { FiLogIn } from "react-icons/fi";



export default function Home() {

  return (
    <main>
      <Heading />
      <h2>Herzlich Willkommen!</h2>
      <p className={styles.textContent}>
      Wir freuen uns, dich auf unserer Internetseite begrüßen zu dürfen. 
      Hier bieten wir dir eine sorgfältig zusammengestellte Auswahl an Reifen 
      für alle Jahreszeiten, sei es für den Sommer, den Winter oder das ganze 
      Jahr. Egal, welche Anforderungen du an deine Reifen hast, wir sind sicher,
       dass du bei uns die passende Option finden wirst.</p>
       
      <p className={styles.textContent}>Um in unserer breiten Produktpalette stöbern zu können, melde dich bitte 
        mit deinem Konto ein. Hier wirst du eine Vielzahl von hochwertigen Reifen 
        finden, die deinen Bedürfnissen gerecht werden. Unser Ziel ist es, dir die 
        besten Reifenlösungen anzubieten, um deine Fahrten sicherer und komfortabler 
        zu gestalten.</p>
      <p>Deinem zuverlässigen Partner für erstklassige Reifen!</p>

      <Link href={"/login"} className={styles.loginLink}>
            <FiLogIn size={16} /> Zum Login
        </Link>
    </main>
  )
}
