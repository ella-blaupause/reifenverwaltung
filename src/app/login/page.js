'use client'

import { useRouter } from "next/navigation"
import Heading from "../../../components/Heading/Heading"
import LoginForm from "../../../components/LoginForm/LoginForm"


export default function Home() {
  const router = useRouter()

  return (
    <main>
      <Heading />
      <LoginForm />
    </main>
  )
}
