'use client'

import { useRouter } from "next/navigation"
import Heading from "../../../components/Heading/Heading"
import RegisterForm from "../../../components/RegisterForm/RegisterForm"


export default function Home() {
  const router = useRouter()

  return (
    <main>
      <Heading />
      <RegisterForm/>
    </main>
  )
}
