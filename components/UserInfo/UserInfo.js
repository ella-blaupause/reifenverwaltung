"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


export default function UserInfo() {
  const { data: session } = useSession(); 
  console.log(session)
    return (
      <div>
        <div>
          <div>
            Hallo <span>{session?.user?.username}</span>
          </div>
         
          <button onClick={() => signOut()}>
            Log Out
          </button>
        </div>
      </div>
    );
  }