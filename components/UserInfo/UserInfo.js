"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";



export default function UserInfo() {
  const { data: session } = useSession(); 
  
    return (
      <div>
        <div>
          <div>
            Hallo <span>{session?.user?.username}</span>
          </div>
         
          <button onClick={() => signOut()}>
            <FiLogOut />
          </button>
        </div>
      </div>
    );
  }