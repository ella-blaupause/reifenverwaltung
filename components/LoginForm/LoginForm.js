"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  
  return (
    <div>
      <div >
        <h2>Login</h2>

        <form>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <br/>
          <input
            onChange={(e) => setPassword(e.target.value)}
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
