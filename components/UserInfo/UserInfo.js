"use client";

import { signOut } from "next-auth/react";


export default function UserInfo() {
  
    return (
      <div>
        <div>
          <div>
            Hallo <span>lala</span>
          </div>
         
          <button onClick={() => signOut()}>
            Log Out
          </button>
        </div>
      </div>
    );
  }