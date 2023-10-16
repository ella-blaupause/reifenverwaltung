"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import styles from "./LoginForm.module.css"



export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleSubmit(event){ 
    event.preventDefault(); 

    try{
      const response = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if(response.error){
        setError("Ungültige Anmeldedaten");
        return;
      }

      router.replace("dashboard");      
    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <div className={styles.loginDiv}>
        <h2 className={styles.loginHeader}>Login</h2>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputDiv}>
            <FaUser size={18} className={styles.icon} />
            <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Benutzername"
            />
          </div>

          <div className={styles.inputDiv}>
            <FaLock size={18} className={styles.icon} />
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Passwort"
            />
          </div>
        
          <button className={styles.loginButton}>
            Anmelden
          </button>
         
          {error && (
            <div className={styles.errorDiv}>
              {error}
            </div>
          )}

          <Link href={"/register"} className={styles.formLink}>
            Neues Konto erstellen
          </Link>
        </form>
    </div>
  );
}
