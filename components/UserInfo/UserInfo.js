"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import styles from "./UserInfo.module.css"



export default function UserInfo() {
  const { data: session } = useSession(); 
  
    return (
      <div>
        <div className={styles.halloDiv}>
          Hallo {session?.user?.username}
        </div>
         
        <button onClick={() => signOut()} className={styles.logoutButton}>
          <FiLogOut /> Ausloggen
        </button>
      </div>
    );
  }