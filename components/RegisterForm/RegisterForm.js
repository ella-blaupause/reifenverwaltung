"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div>
      <div>
        <h2>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <br />
          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
          />
          <br />
          <button>
            Register
          </button>
          <br />

          {error && (
            <div>
              {error}
            </div>
          )}

          <Link href={"/login"}>
            Already have an account? <span>Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
