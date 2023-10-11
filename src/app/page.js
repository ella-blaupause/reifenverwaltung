'use client'

import { useRouter } from "next/navigation"
import Heading from "../../components/Heading/Heading"
import styles from "./page.module.css"


export default function Home() {
  const router = useRouter()

  return (
    <main>
      <Heading />
      <button className={styles.kundenButton} type="button" onClick={() => router.push('/login')}>
        Login
      </button>
    </main>
  )
}
