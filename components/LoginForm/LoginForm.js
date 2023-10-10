"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleSubmit(event){ 
    event.preventDefault(); 

    try {
      const response = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (response.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }

  }
  
  return (
    <div>
      <div >
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Username"
          />
          <br/>
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <button>
            Login
          </button>
          <br />
          {error && (
            <div>
              {error}
            </div>
          )}

          <Link href={"/register"}>
            Don't have an account? <span>Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
