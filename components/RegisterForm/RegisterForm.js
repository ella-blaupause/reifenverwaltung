"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./RegisterForm.module.css"
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

 async function handleSubmit(event){
    event.preventDefault();

    if (!username || !password) {
      setError("Alle Felder ausfüllen!");
      return;
    }

    try{
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const { user } = await resUserExists.json();
      

      if (user) {
        setError("User already exists.");
        return;
      }

      const response = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const form = event.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  }
  
  
  return (
    <div className={styles.registerDiv}>
        <h2 className={styles.registerHeader}>Register</h2>

        <form onSubmit={handleSubmit} className={styles.registerForm}>
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

          <button className={styles.regisgerButton}>
             Registrieren
          </button>
        

          {error && (
            <div className={styles.errorDiv}>
              {error}
            </div>
          )}

          <Link href={"/login"} className={styles.formLink}>
            <FiLogIn size={16} /> Zum Login
          </Link>
        </form>
    </div>
  );
}
