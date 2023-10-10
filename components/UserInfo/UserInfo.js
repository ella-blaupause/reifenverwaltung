"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


export default function UserInfo() {

 
  
    return (
      <div>
        <div>
          <div>
            Hallo <span></span>
          </div>
         
          <button>
            Log Out
          </button>
        </div>
      </div>
    );
  }